$.register({
  rule: {
    host: /^(www\.)?dd\.ma$/,
  },
  ready: function (m) {
    'use strict';

    var i = $.$('#mainframe');
    if (i) {
      return i.src.link();
    }

    var a = $('#btn_open a');
    return a.href.link();
  },
});
