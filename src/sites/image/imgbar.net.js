// second stage
$.register({
  rule: {
    host: /^imgbar\.net$/,
    path: /^\/img_show\.php$/,
    query: /^\?view_id=/,
  },
  ready: function () {
    'use strict';

    var i = $('center img');
    return i.src.image();
  },
});

// first stage
$.register({
  rule: {
    host: /^imgbar\.net$/,
  },
  ready: function () {
    'use strict';

    var i = $('div.panel.top form input[name=sid]');
    return ('/img_show.php?view_id=' + i.value).link();
  },
});
