$.register({
  rule: {
    host: [
      /^imgnova\.xyz$/,
      /^www\.hentai-hot\.xyz$/,
    ],
    path: /^\/i\/(v|x|o|r)\.php$/,
    query: /f=(.+)$/,
  },
  start: function (m) {
    'use strict';

    return ('f/' + m.query[1]).image();
  },
});
