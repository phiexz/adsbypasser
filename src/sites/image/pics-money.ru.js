$.register({
  rule: [
    'http://pics-money.ru/allpicfree/*',
    'http://www.pics-money.ru/allimage/*',
  ],
});

$.register({
  rule: {
    host: /^pics-money\.ru$/,
    path: /^\/v\.php$/,
  },
  ready: function () {
    'use strict';

    $.removeNodes('iframe');

    var i = $('center img:not([id])');
    return i.src.image();
  },
});

$.register({
  rule: {
    host: /^www\.pics-money\.ru$/,
  },
  ready: function () {
    'use strict';

    $.removeNodes('iframe');

    var i = $('#d1 img');
    i = i.onclick.toString();
    i = i.match(/mshow\('(.+)'\)/);
    i = i[1];
    return i.image();
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
