$.register({
  rule: 'http://www.casimages.com/img.php?*',
  ready: function () {
    'use strict';

    var img = $('td a img');
    return img.src.image();
  },
});
