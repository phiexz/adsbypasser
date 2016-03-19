$.register({
  rule: {
    host: /^(www\.)?larashare\.com$/,
    path: /^\/do\.php$/,
    query: /id=\d+/,
  },
  start: function () {
    'use strict';
    return document.location.href.replace('id=','down=').link();
  },
});
