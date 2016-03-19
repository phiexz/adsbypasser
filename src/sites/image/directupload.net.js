$.register({
  rule: 'http://*.directupload.net/file/*.htm',
  ready: function () {
    'use strict';

    var i = $('#ImgFrame');
    return i.src.image();
  },
});
