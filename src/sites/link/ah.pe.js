$.register({
  rule: {
    host: /^ah\.pe$/,
  },
  ready: function () {
    'use strict';

    $.removeNodes('iframe');

    var url = $.window.url;
    return $.get(url).then(function (url) {
      return url.link();
    });
  },
});
