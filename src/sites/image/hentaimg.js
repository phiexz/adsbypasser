$.register({
  rule: 'http://hentaimg.com/mg/lndex-1.php?img=*',
  ready: function () {
    'use strict';

    return ('index-1.php' + window.location.search).link();
  },
});

$.register({
  rule: 'http://hentaimg.com/mg/index-1.php?img=*',
  ready: function () {
    'use strict';

    var i = $('#content img');
    return i.src.image();
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
