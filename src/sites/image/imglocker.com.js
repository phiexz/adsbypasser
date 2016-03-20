$.register({
  rule: {
    host: /^imglocker\.com$/,
    path: [
      /^(\/\w+)\/(.+)\.html$/,
      /^(\/\w+)\/(.+)$/,
    ],
  },
  start: function (m) {
    'use strict';
    var url = _.T('//img.imglocker.com{0}_{1}');
    return url(m.path[1], m.path[2]).image();
  },
});
