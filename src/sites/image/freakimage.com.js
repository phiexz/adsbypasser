$.register({
  rule: {
    host: /^freakimage\.com|www\.hostpic\.org$/,
    path: /^\/view\.php$/,
    query: /^\?filename=([^&]+)/,
  },
  start: function (m) {
    'use strict';

    return ('/images/' + m.query[1]).image();
  },
});
