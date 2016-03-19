$.register({
  rule: {
    host: [
      /^(www\.)?shortenurl\.tk$/,
      /^(www\.)?pengaman\.link$/,
    ],
    path: /^\/\w+$/,
  },
  ready: function (m) {
    'use strict';

    var l = $('a.btn-block.redirect');

    return l.href.link();
  },
});
