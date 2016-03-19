$.register({
  rule: {
    host: [
      /^(awet|sortir)\.in$/,
      /^st\.benfile\.com$/,
      /^st\.azhie\.net$/,
    ],
  },
  ready: function () {
    'use strict';

    var m = $.searchScripts(/window\.location="([^"]*)";/);
    return m[1].link();
  },
});
