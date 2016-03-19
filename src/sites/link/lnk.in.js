$.register({
  rule: {
    host: /^lnk\.in$/,
  },
  ready: function () {
    'use strict';

    var a = $('#divRedirectText a');
    return a.innerHTML.link();
  },
});
