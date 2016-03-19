$.register({
  rule: {
    host: /^(www\.)?linkplugapp\.com$/,
  },
  ready: function () {
    'use strict'

    var a = $('#mc_embed_signup_scroll a')
    return a.href.link();
  },
});
