$.register({
  rule: [
    {
      host: [
        /^emptypix\.com|overdream\.cz$/,
        /^www\.sexseeimage\.com$/,
      ],
      path: /^\/image\//,
    },
    {
      host: /^10\.imageleon\.com$/,
      path: /^\/img-(.+)\.html$/,
    },
    {
      host: /^sexyxpixels\.com$/,
      query: /^\?v=/,
    },
  ],
  ready: function () {
    'use strict';

    var img = $('#full_image');
    return img.src.image();
  },
});
