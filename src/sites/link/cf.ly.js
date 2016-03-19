$.register({
  rule: {
    host: /^cf\.ly$/,
    path: /^\/[^\/]+$/,
  },
  start: function (m) {
    'use strict';

    $.removeNodes('iframe');
    return ('/skip' + m.path[0]).link();
  },
});
