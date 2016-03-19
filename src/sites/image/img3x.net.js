$.register({
  rule: {
    host: /^img3x\.net$/,
  },
  ready: function () {
    'use strict';

    var f = $.$('form');
    if (f) {
      f.submit();
      return;
    }

    f = $('#show_image');
    return f.src.image();
  },
});
