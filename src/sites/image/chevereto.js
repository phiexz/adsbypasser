$.register({
  rule: 'http://javelite.tk/viewer.php?id=*',
  ready: function () {
    'use strict';

    var i = $('table img');
    return i.src.image();
  },
});
