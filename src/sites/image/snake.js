(function () {
  'use strict';

  // first stage
  $.register({
    rule: {
      host: /^www\.imagesnake\.com$/,
      path: /^\/index\.php$/,
      query: /^\?/,
    },
    ready: function () {
      var a = $('#tablewraper a:nth-child(2)');
      return a.href.image();
    },
  });

  // second stage
  function run () {
    var i = $('#img_obj');
    return i.src.image();
  }
  $.register({
    rule: {
      host: /^www\.(imagesnake|freebunker|imgcarry)\.com$/,
      path: /^\/show\//,
    },
    ready: run,
  });
  $.register({
    rule: {
      host: /^www\.imagefruit\.com$/,
      path: /^\/(img|show)\/.+/,
    },
    ready: run,
  });

})();
