$.register({
  rule: {
    host: /^postimg\.org$/,
  },
  ready: function () {
    'use strict';

    var a = $.$('body > center > a > img');
    if(a){
      return a.parentNode.href.link();
    }

    var i = $('body > center > img');
    return i.src.image();
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
