$.register({
  rule: {
    host: /^www\.cuzle\.com$/,
    path: /^\/$/,
    query: /^\?(.+)=$/,
  },
  start: function (m) {
    'use strict';

    var url = atob(m.query[1]);
    return url.link();
  },
});
