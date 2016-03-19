$.register({
  rule: {
    host: /^(www\.)?ouo\.io$/,
    path: /^\/go\/\w+$/,
  },
  ready: function (m) {
    'use strict';

    var a = $('#btn-main');
    return a.href.link();
  },
});
