$.register({
  rule: {
    host: /^img24\.org$/,
  },
  ready: function () {
    'use strict';

    var f = $.$('img.img-polaroid + form');
    if (f) {
      f.submit();
      return;
    }

    f = $('img.img-polaroid');
    return f.src.image({
      referer: true,
    });
  },
});
