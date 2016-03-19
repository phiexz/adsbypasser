$.register({
  rule: {
    host: /^(www\.)?vir\.al$/,
  },
  ready: function () {
    'use strict';

    var m = $.searchScripts(/var target_url = '([^']+)';/);
    if (!m) {
      throw new _.AdsBypasserError('site changed');
    }
    return m[1].link();
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
