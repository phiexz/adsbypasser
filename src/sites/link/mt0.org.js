$.register({
  rule: {
    host: /^mt0\.org$/,
    path: /^\/[^\/]+\/$/,
  },
  ready: function () {
    'use strict';

    $.removeNodes('frame[name=bottom]');

    var f = $('frame[name=top]');
    return _.try(1000, function () {
      var a = $.$('div a', f.contentDocument);
      if (!a) {
        return _.none;
      }
      return a.href.link();
    });
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
