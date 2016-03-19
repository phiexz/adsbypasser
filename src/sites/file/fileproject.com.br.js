$.register({
  rule: {
    host: /^www\.fileproject\.com\.br$/,
    path: /^\/files\/+/,
  },
  ready: function () {
    'use strict';

    var m = $.searchScripts(/<a id="down" href="([^"]+)">/);

    return m[1].link();
  },
});
