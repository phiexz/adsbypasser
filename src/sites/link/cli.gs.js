$.register({
  rule: {
    host: /^(www\.)?cli\.gs$/,
  },
  ready: function () {
    'use strict';

    var a = $('a.RedirectLink');
    return a.href.link();
  },
});
