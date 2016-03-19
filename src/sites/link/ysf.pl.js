$.register({
  rule: {
    host: /^ysf\.pl$/,
    path: /^\/3\/(.+)$/,
  },
  start: function (m) {
    'use strict';

    var url = atob(m.path[1]);
    return url.link();
  },
});
