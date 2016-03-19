(function () {
  'use strict';

  function afterGotSessionId (sessionId) {
    var X_NewRelic_ID = $.searchScripts(/xpid:"([^"]+)"/);

    var data = {
      adSessionId: sessionId,
    };

    var header = {
      Accept: 'application/json, text/javascript',
    };

    if (X_NewRelic_ID) {
      header['X-NewRelic-ID'] = X_NewRelic_ID;
    }

    return _.try(1000, function () {
      return $.get('/shortest-url/end-adsession', data, header).then(function (text) {
        var r = _.parseJSON(text);
        if (r.status === 'ok' && r.destinationUrl) {
          return r.destinationUrl;
        }
        return _.none;
      });
    }).then(function (url) {
      $.removeAllTimer();
      url = decodeURIComponent(url);
      return url.link();
    });
  }

  var hostRules = /^sh\.st|(dh10thbvu|u2ks|jnw0)\.com|digg\.to$/;

  $.register({
    rule: {
      host: hostRules,
      path: /^\/freeze\/.+/,
    },
    ready: function () {
      return _.D(function (resolve, reject) {
        // Wait for the timer (server-side check)
        var o = new MutationObserver(function (mutations) {
          mutations.forEach(function (mutation) {
            // If the button is now active
            if (mutation.target.getAttribute('class').match(/active/)) {
              o.disconnect();
              // Then we can redirect
              resolve(mutation.target.href.link());
            }
          });
        });

        o.observe($('#skip_button'), {
          attributes: true,
          attributeFilter: ['class'],
        });
      });
    },
  });

  $.register({
    rule: {
      host: hostRules,
      path: /https?:\/\//,
    },
    start: function () {
      var url = window.location.pathname + window.location.search + window.location.hash;
      url = url.match(/(https?:\/\/.*)$/);
      url = url[1];
      return url.link();
    },
  });

  $.register({
    rule: {
      host: hostRules,
      path: /^\/[\d\w]+/,
    },
    start: function () {
      $.window._impspcabe = 0;
    },
    ready: function () {
      $.removeNodes('iframe');
      $.removeAllTimer();

      var m = $.searchScripts(/sessionId: "([\d\w]+)",/);
      if (m) {
        return afterGotSessionId(m[1]);
      }

      // script not loaded yet, wait until it appears
      return _.D(function (resolve, reject) {
        var o = new MutationObserver(function (mutations) {
          mutations.forEach(function (mutation) {
            var m = $.searchScripts(/sessionId: "([\d\w]+)",/);
            if (m) {
              o.disconnect();
              resolve(m[1]);
            }
          });
        });
        o.observe(document.body, {
          childList: true,
        });
      }).then(function (sessionId) {
        return afterGotSessionId(sessionId);
      });
    },
  });

})();

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
