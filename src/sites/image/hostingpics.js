$.register({
  rule: 'http://www.hostingpics.net/viewer.php?id=*',
  ready: function () {
    'use strict';

    var i = $('#img_viewer');
    return i.src.image();
  },
});
