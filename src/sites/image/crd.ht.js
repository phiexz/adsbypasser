$.register({
  rule: {
    host: /^crd\.ht$/,
  },
  ready: function () {
    'use strict';

    var i = $('.continue > form > input[name=link]');
    return i.value.image();
  },
});
