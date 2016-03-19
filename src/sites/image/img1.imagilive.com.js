$.register({
  rule: 'http://img1.imagilive.com/*/*',
  ready: function () {
    'use strict';

    var a = $.$('#page a.button');
    if (a) {
      return a.href.link();
    }

    var i = $('#page > img:not([id])');
    return i.src.image();
  },
});
