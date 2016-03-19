$.register({
  rule: {
    host: /^imagik\.fr$/,
    path: /^\/view(-rl)?\/(.+)/,
  },
  start: function (m) {
    'use strict';

    // mimetype is text/plain
    return ('/uploads/' + m.path[2]).image();
  },
});
