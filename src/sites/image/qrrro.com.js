$.register({
  rule: {
    host: /^(qrrro|greenpiccs)\.com$/,
    path: /^(\/images\/.+)\.html$/,
  },
  start: function (m) {
    'use strict';

    return m.path[1].image();
  },
});
