(function () {
  'use strict';

  function run () {
    var i = $('#image');
    return i.src.image();
  }

  $.register({
    rule: {
      host: /^(www\.)?imagepearl\.com$/,
      path: /^\/verify\/(.+)$/,
    },
    start: function (m) {
      return ('/image/' + m.path[1]).link({
        referer: false,
      });
    },
  });

  $.register({
    rule: [
      'http://*.abload.de/image.php?img=*',
      'http://www.imageup.ru/*/*/*.html',
      // different layout same handler
      'http://itmages.ru/image/view/*/*',
      // different layout same handler
      {
        host: /^(www\.)?imagepearl\.com$/,
        path: /^\/(view|image)\//,
      },
    ],
    ready: run,
  });

})();
