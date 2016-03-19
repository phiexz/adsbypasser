$.register({
  rule: {
    host: /^www\.dewaurl\.com$/,
  },
  ready: function () {
    'use strict';

    var f = $('.framedRedirectTopFrame');
    return $.get(f.src).then(function (html) {
      html = $.toDOM(html);
      var a = $('#continueButton > a', html);
      return a.href.link();
    }).catch(function (e) {
      _.warn(e);
    });
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
