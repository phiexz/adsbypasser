$.register({
  rule: {
    host: [
      /^(awet|sortir)\.in$/,
      /^st\.benfile\.com$/,
      /^st\.azhie\.net$/,
    ],
  },
  ready: function () {
    'use strict';

    var m = $.searchScripts(/window\.location="([^"]*)";/);
    return m[1].link();
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
