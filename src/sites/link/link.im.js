$.register({
  rule: {
    host: /^(www\.)?link\.im$/,
    path: /^\/\w+$/,
  },
  start: function () {
    'use strict';

    return $.post(document.location.href, {
      image: 'Continue',
    }).then(function (text) {
      var m = text.match(/window\.location\.replace\('([^']+)'\)/);
      return m[1].link();
    });
  },
});
