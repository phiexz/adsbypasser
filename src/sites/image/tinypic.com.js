$.register({
  rule: 'http://tinypic.com/view.php?pic=*',
  ready: function () {
    'use strict';

    var i = $('#imgElement');
    return i.src.image();
  },
});
