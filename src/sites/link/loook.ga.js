$.register({
  rule: {
    host: /^(www\.)?loook\.ga$/,
    path: /^\/\d+$/
  },
  ready: function (m) {
    'use strict';

    var a = $('#download_link > a.btn');
    return a.href.link();
  },
});
