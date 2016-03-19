$.register({
  rule: [
    {
      host: /^a\.pomf\.se$/,
      path: /^\/.+\.htm$/,
      // filter lbGate
      query: /^$/,
    },
    {
      host: /^empireload\.com$/,
      path: /^\/sexy\/.+\.htm$/,
      // filter lbGate
      query: /^$/,
    },
  ],
  ready: function () {
    'use strict';

    var a = $.$('body > a');
    if (a) {
      return a.href.image();
    }
    $.removeNodes('#boxes, iframe');
  },
});
