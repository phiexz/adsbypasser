$.register({
  rule: {
    host: [
      /^segmentnext\.com$/,
      /^(www\.)?videogamesblogger.com$/,
    ],
    path: /^\/interstitial\.html$/,
    query: /return_url=([^&]+)/,
  },
  start: function (m) {
    'use strict';

    return decodeURIComponent(m.query[1]).link();
  },
});
