$.register({
  rule:{
    host:/^(www\.)?fiuxy\.net$/,
    path:/^\/link\/\?.*$/
  },
  ready:function(){
    return $('a.btn.a').href.link();
  }
});
