$.register({
  rule: {
    host: /^(www\.)?allkeyshop\.com$/,
  },
  ready: function (m) {
    'use strict';

    // Avoid that the page redirects when it's already loading the target page
    $.removeAllTimer();

    var matches = $.searchScripts(/window\.location\.href = "([^"]+)"/);
    return matches[1].link();
  },
});
