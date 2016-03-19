// Note: Captcha is verified client-side
$.register({
  rule: {
    host: /^(www\.)?boxcash\.net$/,
    path: /^\/[\w~]+$/,
  },
  ready: function () {
    'use strict';

    // JSON.parse() is not used because their JSON is malformed
    var m = $.searchScripts(/\'\/ajax_link\.php\',\s*\{key:\s*'(\w+)',\s*url:\s*'(\d+)',\s*t:\s*'(\d+)',\s*r:\s*'(\w*)'\}/);
    if (!m) {
      return;
    }

    return $.post('/ajax_link.php', {
      key: m[1],
      url: m[2],
      t: m[3],
      r: m[4],
    }).then(function (response) {
      var l = response.match(/window(?:.top.window)\.location="([^"]+)"/);
      return l[1].link();
    });
  },
});

$.register({
  rule: {
    host: /^(www\.)?boxcash\.net$/,
    path: /^\/redirect\.html$/,
    query: /url=(.+)$/,
  },
  start: function (m) {
    'use strict';

    var l = decodeURIComponent(m.query[1]);
    return l.link();
  },
});


// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
