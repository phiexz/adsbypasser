$.register({
  rule: {
    host: /^linkshrink\.net$/,
    path: /^\/[a-zA-Z0-9]+$/,
  },
  start: function () {
    'use strict';

    $.window._impspcabe = 0;
  },
  ready: function () {
    'use strict';

    var l = $('#skip .bt');
    return l.href.link();
  },
});

$.register({
  rule: {
    host: /^linkshrink\.net$/,
    path: /=(.+)$/,
  },
  start: function (m) {
    'use strict';

    return m.path[1].link();
  },
});
