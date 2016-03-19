$.register({
  rule: {
    host: /^(www\.)?cvc\.la$/,
    path: /^\/\w+$/,
  },
  start: function () {
    'use strict';

    return $.post(document.location.href, {
      hidden: 24, // Either 24 or 276, but both seem to work anyway
      image: ' ',
    }).then(function (text) {
      var matches = text.match(/window\.location\.replace\('([^']+)'\);/);
      return matches[1].link();
    });
  },
});
