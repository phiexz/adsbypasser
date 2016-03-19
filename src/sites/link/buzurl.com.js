$.register({
  rule: {
    host: /^(www\.)?(buz|vzt)url\.com$/,
  },
  ready: function () {
    'use strict';

    var frame = $('frame[scrolling=yes]');
    return frame.src.link();
  },
});
