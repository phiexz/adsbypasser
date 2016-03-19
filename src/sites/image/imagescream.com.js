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
