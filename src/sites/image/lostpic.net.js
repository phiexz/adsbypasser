$.register({
  rule: {
    host: /^lostpic\.net$/,
    query: /^\?photo=\d+$/,
  },
  ready: function () {
    'use strict';

    var i = $('img.notinline.circle');
    return i.src.image();
  },
});
