$.register({
  rule: 'http://ipic.su/?page=img&pic=*',
  ready: function () {
    'use strict';

    var i = $('#fz');
    return i.src.image();
  },
});
