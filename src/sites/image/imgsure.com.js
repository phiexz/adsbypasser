$.register({
  rule: {
    host: /^(imgsure|picexposed)\.com$/,
  },
  ready: function () {
    'use strict';

    var i = $('img.pic');
    return i.src.image();
  },
});
