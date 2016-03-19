$.register({
  rule: {
    host: /^imgchili\.(com|net)|www\.pixhost\.org$/,
    path: /^\/show\//,
  },
  ready: function () {
    'use strict';

    $.removeNodes('iframe, #ad');

    var o = $.$('#all');
    if (o) {
      o.style.display = '';
    }
    o = $('#show_image');
    return o.src.image();
  },
});
