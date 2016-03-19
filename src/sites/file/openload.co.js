$.register({
  rule: {
    host: /^openload\.co$/,
    path: /^\/f\/.*/,
  },
  start: function (m) {
    $.window.adblock = false;
    $.window.adblock2 = false;
  },
  ready: function () {
    var a = $('#realdl>a');
    if (a.href) {
      return a.href.link()
    }
  }
});
