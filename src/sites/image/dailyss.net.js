$.register({
  rule: {
    host: [
      /^dailyss\.net$/,
      /daily-img\.com$/,
      /img-365\.com$/,
      /^365-img\.com$/,
    ],
    path: /^\/image\/.+$/,
  },
  ready: function () {
    'use strict';

    var i = $('#image-viewer-container img');
    return i.src.image();
  },
});
