$.register({
  rule: {
    host: /^(www\.)?\w+\.link-protector\.com$/,
  },
  ready: function (m) {
    'use strict';

    var f = $('form[style="font-weight:normal;font-size:12;font-family:Verdana;"]');

    return f.action.link();
  },
});
