$.register({
  rule: [
    {
      host: /^imagescream\.com$/,
      path: /^\/img\/(soft\/)?/,
    },
    {
      host: /^(www\.)?(picturescream|picturevip)\.com$/,
      path: /^\/x\//,
    },
    {
      host: [
        /^picturescream\.asia$/,
        /^uploadimage\.eu$/,
      ],
    },
  ],
  ready: function () {
    'use strict';

    var i = $('#shortURL-content img');
    return i.src.image();
  },
});

$.register({
  rule: {
    host: /^(imagescream|anonpic)\.com|all-poster\.ru$/,
    query: /^\?v=/,
  },
  ready: function () {
    'use strict';

    var i = $('#imagen img');
    return i.src.image();
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
