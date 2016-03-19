$.register({
  rule: 'http://bildr.no/view/*',
  ready: function () {
    'use strict';

    var i = $('img.bilde');
    return i.src.link();
  },
});
