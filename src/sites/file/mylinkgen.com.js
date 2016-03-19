$.register({
  rule: {
    host: /^mylinkgen\.com$/,
    path: /^\/p\/(.+)$/,
  },
  start: function (m) {
    'use strict';

    return ('/g/' + m.path[1]).link()
  },
});

$.register({
  rule: {
    host: /^mylinkgen\.com$/,
    path: /^\/g\//,
  },
  ready: function () {
    'use strict';

    var a = $('#main-content a.btn.btn-default');
    return a.href.link()
  },
});
