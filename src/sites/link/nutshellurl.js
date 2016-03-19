$.register({
  rule: {
    host: /^nutshellurl\.com$/,
  },
  ready: function () {
    'use strict';

    var iframe = $('iframe');
    return iframe.src.link();
  },
});
