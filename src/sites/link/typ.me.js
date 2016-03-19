$.register({
  rule: {
    host: /^(www\.)?typ\.me$/,
  },
  ready: function () {
    'use strict';

    var a = $('#skipAdBtn');
    return a.href.link();
  },
});
