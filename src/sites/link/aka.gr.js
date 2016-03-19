$.register({
  rule: {
    host: /^aka\.gr$/
  },
  ready: function () {
    'use strict';

    var l = $('iframe#yourls-frame');
    return l.src.link();
  },
});
