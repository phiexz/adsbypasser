$.register({
  rule: {
    host: /^unfake\.it$/,
  },
  ready: function () {
    'use strict';

    var frame = $('frame');
    var i = frame.src.lastIndexOf('http://');
    return frame.src.substr(i).link();
  },
});
