$.register({
  rule: 'http://picshare.geenza.com/pics/*',
  ready: function () {
    'use strict';

    var i = $('#picShare_image_container');
    return i.src.image();
  },
});
