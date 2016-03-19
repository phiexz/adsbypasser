$.register({
  rule: {
    host: /^(www\.)?dd\.ma$/,
  },
  ready: function (m) {
    'use strict';

    var i = $.$('#mainframe');
    if (i) {
      return i.src.link();
    }

    var a = $('#btn_open a');
    return a.href.link();
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
