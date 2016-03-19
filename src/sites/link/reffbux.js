$.register({
  rule: 'http://reffbux.com/refflinx/view/*',
  ready: function () {
    'use strict';

    $.removeNodes('iframe');

    var m = $.searchScripts(/skip_this_ad_(\d+)_(\d+)/);
    var id = m[1];
    var share = m[2];
    var location = window.location.toString();

    return $.post('http://reffbux.com/refflinx/register', {
      id: id,
      share: share,
      fp: 0,
      location: location,
      referer: '',
    }).then(function (text) {
      var m = text.match(/'([^']+)'/);
      if (!m) {
        throw new _.AdsBypasserError('pattern changed');
      }
      return m[1].link();
    });
  },
});
