$.register({
  rule: 'http://www.bilder-space.de/*.htm',
  ready: function () {
    'use strict';

    $.removeNodes('iframe');

    var img = $('img.picture');
    return img.src.image();
  },
});
