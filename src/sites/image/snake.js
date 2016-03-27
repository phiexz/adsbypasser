(function () {
  'use strict';

  // first stage
  $.register({
    rule: {
      host: /^www\.imagesnake\.com$/,
      path: /^\/show\.php$/,
      query: /^\?/,
    },
    ready: run,
  });

  // second stage
  function run () {
    var i = $('#img_obj');
    return i.src.image();
  }
  $.register({
    rule: {
      host: /^www\.(freebunker|imgcarry)\.com$/,
      path: /^\/show\//,
    },
    ready: run,
  });
  $.register({
    rule: {
      host: /^www\.(imagesnake|imagefruit)\.com$/,
      path: /^\/(img|show)\/.+/,
    },
    ready: run,
  });

})();
