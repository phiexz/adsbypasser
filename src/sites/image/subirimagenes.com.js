$.register({
  rule: 'http://www.subirimagenes.com/*.html',
  ready: function () {
    'use strict';

    var i = $('#ImagenVisualizada');
    return i.src.image();
  },
});
