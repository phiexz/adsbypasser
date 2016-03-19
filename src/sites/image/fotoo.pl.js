(function () {
  'use strict';

  function run () {
    var i = $('#img_obj');
    return i.src.image();
  }

  $.register({
    rule: 'http://fotoo.pl/show.php?img=*.html',
    ready: run,
  });

  $.register({
    rule: {
      host: /^www\.(fotoszok\.pl|imagestime)\.com$/,
      path: /^\/show\.php\/.*\.html$/,
    },
    ready: run,
  });

})();
