(function () {

  var hosts = /^gca\.sh|repla\.cr$/;

  $.register({
    rule: {
      host: hosts,
      path: /^\/adv\/\w+\/(.*)$/,
      query: /^(.*)$/,
      hash: /^(.*)$/,
    },
    start: function (m) {
      'use strict';

      var l = m.path[1] + m.query[1] + m.hash[1];
      return l.link();
    },
  });

  $.register({
    rule: {
      host: hosts,
    },
    ready: function () {
      'use strict';

      $.removeNodes('iframe');

      var jQuery = $.window.$;
      return _.wait(1000).then(function () {
        jQuery("#captcha-dialog").dialog("open");
      });
    },
  });

})();

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
