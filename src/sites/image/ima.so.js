$.register({
  rule: {
    host: /^ima\.so$/,
  },
  ready: function () {
    'use strict';

    var a = $('#image_block a');
    return a.href.image();
  },
});
