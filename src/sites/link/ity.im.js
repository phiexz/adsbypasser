$.register({
  rule: {
    host: /^ity\.im$/,
  },
  ready: function () {
    'use strict';

    var f = $.$('#main');
    if (f) {
      return f.src.link();
    }

    f = $.$$('frame').find(function (frame) {
      if (frame.src.indexOf('interheader.php') < 0) {
        return _.none;
      }
      return frame.src;
    });
    if (f) {
      return f.payload.link();
    }

    f = $.searchScripts(/krypted=([^&]+)/);
    if (!f) {
      throw new _.AdsBypasserError('site changed');
    }
    f = f[1];
    var data = $.window.des('ksnslmtmk0v4Pdviusajqu', $.window.hexToString(f), 0, 0);
    if (data) {
      return ('http://ity.im/1104_21_50846_' + data).link();
    }
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
