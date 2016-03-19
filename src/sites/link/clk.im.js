$.register({
  rule: {
    host: /^clk\.im$/,
  },
  ready: function (m) {
    'use strict';

    $.removeNodes('iframe');

    var matches = $.searchScripts(/\$\("\.countdown"\)\.attr\("href","([^"]+)"\)/);
    return matches[1].link();
  },
});
