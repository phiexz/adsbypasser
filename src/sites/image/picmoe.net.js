$.register({
  rule: 'http://picmoe.net/d.php?id=*',
  ready: function () {
    'use strict';

    var i = $('img');
    return i.src.image();
  },
});
