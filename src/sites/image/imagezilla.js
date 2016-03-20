$.register({
  rule: {
    host: /^imagezilla\.net$/,
  },
  ready: function () {
    'use strict';
    var i = $('#photo');
    return i.src.image({
      referer: true,
    });
  },
});
