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

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
