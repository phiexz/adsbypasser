$.register({
  rule: {
    host: /^www\.viidii\.info$/,
  },
  ready: function () {
    'use strict';

    var o = $('#directlink');
    return o.href.link();
  },
});
