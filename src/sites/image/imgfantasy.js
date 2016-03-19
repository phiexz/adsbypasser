$.register({
  rule: {
    host: [
      /^img(fantasy|leech|\.pornleech|smile|say|nemo|sense)\.com$/,
      /^(imagedomino|lovechix)\.com$/,
      /^imageporn\.eu$/,
      /^0img\.net$/,
      /^daily-img\.com$/,
    ],
    query: /^\?[pv]=/,
  },
  ready: function () {
    'use strict';

    if ($.window.confirmAge) {
      $.window.confirmAge(1);
      return;
    }
    var i = $('#container-home img[onclick]');
    return i.src.image();
  },
});
