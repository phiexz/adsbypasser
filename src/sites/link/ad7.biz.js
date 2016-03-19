(function () {
  'use strict';

  $.register({
    rule: {
      host: /^ad7.biz$/,
      path: /^\/\d+\/(.*)$/,
    },
    start: function (m) {
      $.removeNodes('iframe');

      // Redirection URL contained in URL
      var redirectLink = m.path[1];
      if (!redirectLink.match(/^https?:\/\//)) {
        redirectLink = "http://" + redirectLink;
      }
      return redirectLink.link();
    },
  });

  $.register({
    rule: {
      host: /^ad7.biz$/,
      path: /^\/\w+$/,
    },
    ready: function () {
      $.removeNodes('iframe');

      var script = $.searchScripts('var r_url');
      var url = script.match(/&url=([^&]+)/);
      url = url[1];
      return url.link();
    },
  });

})();
