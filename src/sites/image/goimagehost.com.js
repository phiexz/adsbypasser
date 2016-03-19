(function () {
  'use strict';

  var hostRule = /^goimagehost\.com$/;

  $.register({
    rule: {
      host: hostRule,
      path: /^\/xxx\/images\//,
    },
  });

  $.register({
    rule: {
      host: hostRule,
      path: /^\/xxx\/(.+)/,
    },
    start: function (m) {
      return ('/xxx/images/' + m.path[1]).image();
    },
  });

  $.register({
    rule: {
      host: hostRule,
      query: /^\?v=(.+)/,
    },
    start: function (m) {
      return ('/xxx/images/' + m.query[1]).image();
    },
  });

})();
