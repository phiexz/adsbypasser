$.register({
  rule: {
    host: /urlcash\.(com|net|org)|(bat5|detonating|celebclk|eightteen|smilinglinks|peekatmygirlfriend|pornyhost|clb1|urlgalleries)\.com|looble\.net|xxxs\.org$/,
  },
  ready: function () {
    'use strict';

    if ($.window && $.window.linkDestUrl) {
      return $.window.linkDestUrl.link();
    }

    var matches = document.body.innerHTML.match(/linkDestUrl = '(.+)'/);
    if (matches) {
      return matches[1].link();
    }
  },
});
