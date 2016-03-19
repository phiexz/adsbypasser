$.register({
  rule: [
    'http://madlink.sk/',
    'http://madlink.sk/*.html',
  ],
});

$.register({
  rule: 'http://madlink.sk/*',
  start: function (m) {
    'use strict';

    $.removeNodes('iframe');
    return $.post('/ajax/check_redirect.php', {
      link: m[1],
    }).then(function (text) {
      return text.link();
    });
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
