$.register({
  rule: {
    host: /\.yfrog\.com$/,
  },
  ready: function () {
    'use strict';

    if (/^\/z/.test(window.location.pathname)) {
      var i = $('#the-image img');
      return i.src.image();
    }
    var a = $.$('#continue-link a, #main_image');
    if (a) {
      return ('/z' + window.location.pathname).image();
    }
  },
});
