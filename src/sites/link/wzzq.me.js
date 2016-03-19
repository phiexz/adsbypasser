$.register({
  rule: {
    host: /^(www\.)?wzzq\.me$/,
  },
  ready: function () {
    'use strict';

    var l = $('#img_loading_table2  div.wz_img_hit a[target=_blank]');
    return l.href.link();
  },
});
