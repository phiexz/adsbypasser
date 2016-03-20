(function () {
  'use strict';

  function run (rp) {
    // dirty hack, prevent scripts appending elements
    $.window.jQuery.prototype.append = undefined;
    var i = $('img.pic');
    return i.src.image({
      replace: rp,
    });
  }

  $.register({
    rule: {
      host: /^imagenpic\.com$/,
      path: /^\/.*\/.+\.html$/,
    },
    ready: _.P(run, true),
  });

  $.register({
    rule: {
      host: /^imagecherry\.com$/,
    },
    ready: _.P(run, true),
  });

  $.register({
    rule: {
      host: /^imagetwist\.com$/,
    },
    ready: _.P(run, false),
  });

})();
