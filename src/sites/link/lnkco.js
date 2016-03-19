$.register({
  rule: {
    host: /^(rd?)lnk\.co|reducelnk\.com$/,
    path: /^\/[^.]+$/,
  },
  ready: function () {
    'use strict';

    var f = $.$('iframe#dest');
    if (f) {
      return f.src.link();
    }

    $.removeNodes('iframe');

    var o = $.$('#urlholder');
    if (o) {
      return o.value.link();
    }

    o = $.$('#skipBtn');
    if (o) {
      o = o.querySelector('a');
      return o.href.link();
    }

    o = document.title.replace(/(LNK.co|Linkbee)\s*:\s*/, '');
    return o.link();
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
