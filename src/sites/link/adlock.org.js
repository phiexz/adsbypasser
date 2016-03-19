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
