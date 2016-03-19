$.register({
  rule: 'http://www.bild.me/bild.php?file=*',
  ready: function () {
    'use strict';

    var i = $('#Bild');
    return i.src.link();
  },
});
