$.register({
  rule: 'http://adfoc.us/*',
  ready: function () {
    'use strict';

    var root = document.body;
    return _.D(function (resolve, reject) {
      var observer = new MutationObserver(function (mutations) {
        var o = $.$('#showSkip');
        if (o) {
          observer.disconnect();
          o = o.querySelector('a');
          resolve(o.href);
        }
      });
      observer.observe(root, {
        childList: true,
        subtree: true,
      });
    }).then(function (url) {
      return url.link();
    });
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
