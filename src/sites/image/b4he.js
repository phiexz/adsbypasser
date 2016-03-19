$.register({
  rule: {
    host: /^freeimgup\.com$/,
    path: /^\/xxx/,
    query: /^\?v=([^&]+)/,
  },
  start: function (m) {
    'use strict';

    return ('/xxx/images/' + m.query[1]).image();
  },
});

$.register({
  rule: {
    host: /^(b4he|freeimgup|fullimg)\.com|fastpics\.net|ifap\.co$/,
    query: /^\?v=([^&]+)/,
  },
  start: function (m) {
    'use strict';

    return ('/images/' + m.query[1]).image();
  },
});
