$.register({
  rule: {
    host: /^www\.ron\.vn$/,
  },
  ready: function () {
    'use strict';

    var script = $.searchScripts('linknexttop');
    var data = script.match(/data:"([^"]+)"/);
    var url = $.window.domain + 'click.html?' + data[1];
    return $.get(url, {}, {
      'Content-Type': 'application/json; charset=utf-8',
    }).then(function (url) {
      return url.link();
    });
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;

