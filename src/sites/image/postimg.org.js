$.register({
  rule: {
    host: /^postimg\.org$/,
  },
  ready: function () {
    'use strict';

    var a = $.$('body > center > a > img');
    if(a){
      return a.parentNode.href.link();
    }

    var i = $('body > center > img');
    return i.src.image();
  },
});
