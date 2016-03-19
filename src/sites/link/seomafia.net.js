$.register({
  rule: {
    host: /^(www\.)?(apploadz\.ru|seomafia\.net)$/
  },
  ready: function () {
    'use strict';

    $.removeNodes('iframe');
    var a = $('table a');
    return a.href.link();
  },
});
