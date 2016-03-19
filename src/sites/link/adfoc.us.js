$.register({
  rule: 'http://adfoc.us/*',
  ready: function () {
    'use strict';

    var root = document.body;
    return _.D(function (resolve, reject) {
      var observer = new MutationObserver(function (mutations) {
        var o = $.$('#showSkip');
        if (o) {
          observer.disconnect();
          o = o.querySelector('a');
          resolve(o.href);
        }
      });
      observer.observe(root, {
        childList: true,
        subtree: true,
      });
    }).then(function (url) {
      return url.link();
    });
  },
});
