$.register({
  rule: {
    host: /^sht\.io$/,
    path: /^\/\d+\/(.+)$/,
  },
  start: function (m) {
    'use strict';

    var url = atob(m.path[1]);
    url = url.match(/\{sht-io\}(.+)$/);
    return url[1].link();
  },
});
