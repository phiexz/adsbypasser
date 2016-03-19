$.register({
  rule: {
    host: /^adlock\.org$/,
  },
  ready: function () {
    'use strict';

    var a = $.$('#xre a.xxr, #downloadButton1');
    if (a) {
      return a.href.link();
    }

    a = $.window.fileLocation;
    if (a) {
      return a.link();
    }
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
