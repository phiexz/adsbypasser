$.register({
  rule: 'http://vvcap.net/db/*.htp',
  ready: function () {
    'use strict';

    var i = $('img');
    return i.src.image({
      replace: true,
    });
  },
});
