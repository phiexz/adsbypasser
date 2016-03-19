$.register({
  rule: {
    host: /^(www\.)?adjet\.biz$/,
  },
  ready: function () {
    'use strict';

    var m = $.searchScripts(/href=(\S+)/);
    if (!m) {
      throw new _.AdsBypasserError('site changed');
    }
    return m[1].link();
  },
});
