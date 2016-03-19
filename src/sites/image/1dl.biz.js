$.register({
  rule: [
    {
      host: /^1dl\.biz$/,
      path: /^\/(\w)\.php$/,
      query: /^\?([\d\/]+)$/,
    },
    {
      host: /^img\.1dl\.biz$/,
      path: /^\/(\w)\.php$/,
      query: /^\?\w\/([\d\/]+)$/,
    },
  ],
  ready: function () {
    'use strict';

    var a = $('.main a, .main-l a');
    return a.href.image({
      referer: true,
    });
  },
});
