$.register({
  rule: 'http://imagepix.org/image/*.html',
  ready: function () {
    'use strict';

    var i = $('img[border="0"]');
    return i.src.image();
  },
});
