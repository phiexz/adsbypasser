$.register({
  rule: 'http://imageshost.ru/photo/*/id*.html',
  ready: function () {
    'use strict';

    var a = $('#bphoto a');
    return a.href.image();
  },
});
