$.register({
  rule: {
    host: /^lnx\.lu|url\.fm|z\.gs$/,
  },
  ready: function () {
    'use strict';

    var a = $('#clickbtn a');
    return a.href.link();
  },
});
