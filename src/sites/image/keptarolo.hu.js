$.register({
  rule: {
    host: /keptarolo\.hu$/,
    path: /^(\/[^\/]+\/[^\/]+\.jpg)$/,
  },
  start: function (m) {
    'use strict';

    return ('http://www.keptarolo.hu/kep' + m.path[1]).image();
  },
});
