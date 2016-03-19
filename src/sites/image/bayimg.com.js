$.register({
  rule: {
    host: /^bayimg\.com$/,
  },
  ready: function () {
    'use strict';

    var i = $('#mainImage');
    return i.src.image();
  },
});
