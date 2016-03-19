(function () {
  'use strict';

  function helper (m) {
    return ('/images/' + m.query[1]).image();
  }

  // mihalism v1
  $.register({
    rule: {
      host: [
        /^(hentai-hosting|miragepics|funextra\.hostzi|imgrex)\.com$/,
        /^bilder\.nixhelp\.de$/,
        /^imagecurl\.(com|org)$/,
        /^imagevau\.eu$/,
        /^img\.deli\.sh$/,
        /^imagepong\.info$/,
        /^imgdream\.net$/,
        /^imgsicily\.it$/,
        /^www\.imghere\.net$/,
      ],
      path: /^\/viewer\.php$/,
      query: /file=([^&]+)/,
    },
    start: helper,
  });

  // dwimg.com
  $.register({
    rule: {
      host: /^(dwimg|imgsin|www\.pictureshoster)\.com$/,
      path: /^\/viewer\.php$/,
      query: /file=([^&]+)/,
    },
    start: function (m) {
      return ('/files/' + m.query[1]).image();
    },
  });

  // imageview.me
  $.register({
    rule: {
      host: [
        /img(nip|central|cream)\.com$/,
        /imageview\.me|244pix\.com|postimg\.net$/,
      ],
      path: /^\/viewerr.*\.php$/,
      query: /file=([^&]+)/,
    },
    start: helper,
  });

  // overpic.net
  $.register({
    rule: [
      'http://www.overpic.net/viewer.php?file=*',
    ],
    ready: function () {
      var i = $('#main_img');
      return i.src.image();
    },
  });

  // empireload.com
  $.register({
    rule: {
      host: /(empireload|loadsanook)\.com$/,
      query: /file=([^&]+)/,
    },
    start: function (m) {
      return ('files/' + m.query[1]).image();
    },
  });

})();
