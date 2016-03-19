$.register({
  rule: {
    host: /^(www\.)?mirrorcreator\.com$/,
    path: /^\/showlink\.php$/,
  },
  ready: function () {
    'use strict';

    var a = $.$('#redirectlink a');
    if (a) {
      return a.href.link();
    }

    a = $('#redirectlink > div.redirecturl');
    a = a.innerHTML;
    if (!a.match(/^http/)) {
      throw new _.AdsBypasserError('not a valid URL');
    }
    return a.link();
  },
});
