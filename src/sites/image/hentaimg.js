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
