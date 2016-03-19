$.register({
  rule: {
    host: /^imageban\.(ru|net)$/,
    path: /^\/show\/\d{4}\/\d{2}\/\d{2}\/.+/,
  },
  ready: function () {
    'use strict';

    var i = $('#img_obj');
    return i.src.image();
  },
});
