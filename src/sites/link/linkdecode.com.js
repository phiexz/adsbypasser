$.register({
  rule: {
    host: [
      /^www\.linkdecode\.com$/,
      /^www\.fastdecode\.com$/,
    ],
    path: /^\/$/,
    query: /^\?(.+)$/,
  },
  ready: function (m) {
    'use strict';

    $.removeNodes('iframe');

    // Either base64 + salt, or a plain URL
    var lnk = m.query[1];

    // If plain URL
    if (m.query[1].match(/^https?:\/\//)) {
      return lnk.link();
    }

    // Interstitial
    var b = $.$('#popup');
    if (b && b.href) {
      return b.href.link();
    }

    // Else if base64 + salt, we get the decrypted URL from the website
    b = $('#m > .Visit_Link');
    b = b.onclick.toString().match(/window\.open\(\'([^']+)\'/);
    if (!b) {
      throw new _.AdsBypasser('pattern changed');
    }

    // Plain link
    lnk = b[1].match(/\?(https?:\/\/.*)$/);
    if (lnk) {
        return lnk[1].link();
    }

    // Continue the decryption
    return b[1].link();
  },
});
