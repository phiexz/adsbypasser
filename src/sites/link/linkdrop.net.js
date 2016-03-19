$.register({
  rule: {
    host: /^(www\.)?linkdrop\.net$/,
  },
  ready: function () {
    'use strict';

    $.removeNodes('iframe');

    var matches = $.searchScripts(/\$\("a\.redirect"\)\.attr\("href","([^"]+)"\)\.text/);
    // Most likely not on a shortening page
    if (!matches) {
      return;
    }

    var l = matches[1];
    return l.link();
  },
});
