$.register({
  rule: 'http://ifotos.pl/zobacz/*',
  ready: function () {
    'use strict';

    var m = $('meta[property="og:image"]');
    return m.content.image();
  },
});
