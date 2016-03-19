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
