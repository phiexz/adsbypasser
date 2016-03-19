$.register({
  rule: {
    host: /^(www\.)?4fun\.tw$/,
  },
  ready: function () {
    'use strict';

    var i = $('#original_url');
    return i.value.link();
  },
});
