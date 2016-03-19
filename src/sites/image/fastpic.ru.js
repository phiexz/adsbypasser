$.register({
  rule: {
    host: /^fastpic\.ru$/,
    path: /^\/view\//,
  },
  ready: function () {
    'use strict';

    var img = $('#picContainer #image');
    return img.src.image({
      // prevent loopback if image not found
      referer: true,
    });
  },
});
