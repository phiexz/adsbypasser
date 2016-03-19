$.register({
  rule:{
    host:/^(www\.)?fiuxy\.net$/,
    path:/^\/link\/\?.*$/
  },
  ready:function(){
    'use strict';
    return $('a.btn.a').href.link();
  }
});
