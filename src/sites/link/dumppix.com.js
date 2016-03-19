$.register({
  rule: 'http://www.dumppix.com/viewer.php?*',
  ready: function () {
    'use strict';

    var i = $.$('#boring');
    if (i) {
      return i.src.link();
    }
    i = $('table td:nth-child(1) a');
    return i.href.link();
  },
});
