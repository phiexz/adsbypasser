$.register({
  rule: {
    host: /^www\.dewaurl\.com$/,
  },
  ready: function () {
    'use strict';

    var f = $('.framedRedirectTopFrame');
    return $.get(f.src).then(function (html) {
      html = $.toDOM(html);
      var a = $('#continueButton > a', html);
      return a.href.link();
    }).catch(function (e) {
      _.warn(e);
    });
  },
});
