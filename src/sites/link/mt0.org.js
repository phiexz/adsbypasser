$.register({
  rule: {
    host: /^mt0\.org$/,
    path: /^\/[^\/]+\/$/,
  },
  ready: function () {
    'use strict';

    $.removeNodes('frame[name=bottom]');

    var f = $('frame[name=top]');
    return _.try(1000, function () {
      var a = $.$('div a', f.contentDocument);
      if (!a) {
        return _.none;
      }
      return a.href.link();
    });
  },
});
