$.register({
  rule: {
    host: /^(www\.)?kingofshrink\.com$/,
  },
  ready: function () {
    'use strict';

    var l = $('#textresult > a');

    return l.href.link();
  },
});
