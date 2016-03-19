$.register({
  rule: {
    host: /^(www\.)?piccash\.net$/
  },
  ready: function () {
    var i = $('.container > img');
    var m =i.onclick.toString().match(/mshow\('([^']+)'\);/);
    return m[1].image();
  },
});
