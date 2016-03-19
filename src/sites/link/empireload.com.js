$.register({
  rule: {
    host: /empireload\.com$/,
    path: /^\/plugin\.php$/,
    query: /^\?id=linkout&url=([^&]+)$/,
  },
  start: function (m) {
    'use strict';
    return m.query[1].link();
  },
});
