$.register({
  rule: {
    host: /^(cf|ex|xt)\d\.(me|co)$/,
  },
  ready: function (m) {
    'use strict';

    $.removeNodes('iframe');
    var a = $('#skip_button');
    return a.href.link();
  },
});
