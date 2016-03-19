$.register({
  rule: {
    host: /^avenuexxx\.com$/,
    path: /^\/archives\//,
  },
  ready: function () {
    'use strict';

    var i = $('#content img');
    return i.src.image();
  },
});
