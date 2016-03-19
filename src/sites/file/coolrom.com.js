$.register({
  rule: {
    host: /^(www\.)?coolrom\.com$/,
    path: /^\/dlpop\.php$/,
  },
  ready: function () {
    'use strict';

    var matches = $.searchScripts(/<form method="POST" action="([^"]+)">/);
    return matches[1].link();
  },
});
