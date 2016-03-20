$.register({
  rule: {
    host: /^imgbin\.me$/,
    path: /^\/view\/([A-Z]+)$/,
  },
  start: function (m) {
    'use strict';

    // always jpg
    var tpl = _.T('/image/{0}.jpg');
    return tpl(m.path[1]).image();
  },
});
