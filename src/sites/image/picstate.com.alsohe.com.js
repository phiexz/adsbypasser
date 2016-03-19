$.register({
  rule: 'http://picstate.com.alsohe.com/view/full/*',
  ready: function () {
    'use strict';

    var img = $('#image_container img');
    return img.src.image();
  },
});
