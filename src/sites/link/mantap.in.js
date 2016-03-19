$.register({
  rule: {
    host: [
      /^mant[ae][pb]\.in$/,
      /^st\.oploverz\.net$/,
      /^minidroid\.net$/,
    ],
  },
  ready: function () {
    'use strict';

    var a = $('a.redirect, a[target=_blank][rel=nofollow]');
    return a.href.link();
  },
});
