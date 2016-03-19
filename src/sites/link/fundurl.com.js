(function () {
  'use strict';

  $.register({
    rule: {
      host: /^(www\.)?fundurl\.com$/,
      query: /i=([^&]+)/,
    },
    start: function (m) {
      return m.query[1].link();
    },
  });

  $.register({
    rule: {
      host: /^(www\.)?fundurl\.com$/,
      path: /^\/(go-\w+|load\.php)$/,
    },
    ready: function () {
      var f = $('iframe[name=fpage3]');
      return f.src.link();
    },
  });

})();
