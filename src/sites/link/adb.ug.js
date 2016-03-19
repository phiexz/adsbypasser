$.register({
  rule: {
    host: [
      /^(www\.)?adb\.ug$/,
      /^(www\.)?lynk\.my$/,
      /^adyou\.me$/,
    ],
    // Match everything but empty, privacy, terms, contact, contact/whatever or path beginning with #
    path: /^(?!\/(?:privacy|terms|contact(\/.*)?|#.*)?$).*$/
  },
  ready: function () {
    'use strict';

    $.removeNodes('iframe');

    // pattern 1
    var m = $.searchScripts(/top\.location\.href="([^"]+)"/);
    if (m) {
      return m[1].link();
    }

    // pattern 2
    m = $.searchScripts(/\{_args.+\}/);
    if (!m) {
      throw new _.AdsBypasserError('script content changed');
    }
    m = eval('(' + m[0] + ')');
    var url = window.location.pathname + '/skip_timer';

    return _.tryThenable(1000, function () {
      return $.post(url, m).then(function (text) {
        var jj = _.parseJSON(text);
        if (!jj.errors && jj.messages) {
          return jj.messages.url;
        }
      });
    }).then(function (url) {
      return url.link();
    });
  },
});
