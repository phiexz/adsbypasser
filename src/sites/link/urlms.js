$.register({
  rule: {
    host: /^urlms\.com$/,
  },
  ready: function () {
    'use strict';

    var iframe = $('#content');
    return iframe.src.link();
  },
});
