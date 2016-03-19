(function () {
  'use strict';

  // bc.vc, shortcut
  $.register({
    rule: {
      host: [
        /^bc\.vc$/,
        /^linc\.ml$/,
      ],
      path: /^.+(https?:\/\/.+)$/,
    },
    start: function (m) {
      return (m.path[1] + document.location.search + document.location.hash).link();
    },
  });

  function decompress (script, unzip) {
    if (!unzip) {
      return script;
    }
    var matches = script.match(/eval(.*)/);
    matches = matches[1];
    script = eval(matches);
    return script;
  }

  function searchScript (unzip) {
    var content = $.searchScripts('make_log');
    if (content) {
      return {
        direct: false,
        script: decompress(content, unzip),
      };
    }
    content = $.searchScripts('click_log');
    if (content) {
      return {
        direct: true,
        script: decompress(content, unzip),
      };
    }
    throw _.AdsBypasserError('script changed');
  }

  function knockServer (script, dirtyFix) {
    var matches = script.match(/\$.post\('([^']*)'[^{]+(\{opt:'make_log'[^}]+\}\}),/i);
    var make_url = matches[1];
    var make_opts = eval('(' + matches[2] + ')');

    return _.tryThenable(1000, function () {
      return $.post(make_url, make_opts).then(function (text) {
        if (dirtyFix) {
          // dirty fix for tr5.in
          text = text.match(/\{.+\}/)[0];
        }
        var jj = _.parseJSON(text);
        if (jj.message) {
          return jj.message.url;
        }
        return _.none;
      });
    }).then(function (url) {
      return url.link();
    });
  }

  function knockServer2 (script) {
    // somehow I must use jQuery AJAX
    var post = $.window.$.post;
    // mock a fake AJAX function
    $.window.$.post = function (a, b, c) {
      if (typeof c !== 'function') {
        return;
      }
      return _.wait(1000).then(function () {
        var data = {
          error: false,
          message: {
            url: '#',
          },
        };
        c(JSON.stringify(data));
      });
    };

    var matches = script.match(/\$.post\('([^']*)'[^{]+(\{opt:'make_log'[^}]+\}\}),/i);
    var make_url = matches[1];
    // dummy varialbes for eval script
    var tZ, cW, cH, sW, sH;
    var make_opts = eval('(' + matches[2] + ')');

    function makeLog () {
      make_opts.opt = 'make_log';
      // FIXME very likely to break
      return post(make_url, make_opts).then(function (text) {
        var data = _.parseJSON(text);
        _.info('make_log', data);
        if (!data.message) {
          return checksLog();
        }

        return data.message.url.link();
      });
    }

    function checkLog () {
      make_opts.opt = 'check_log';
      return post(make_url, make_opts).then(function (text) {
        var data = _.parseJSON(text);
        _.info('check_log', data);
        if (!data.message) {
          return checkLog();
        }

        return makeLog();
      });
    }

    function checksLog () {
      make_opts.opt = 'checks_log';
      return post(make_url, make_opts).then(function () {
        _.info('checks_log');
        return checkLog();
      });
    }

    return checksLog();
  }

  // bc.vc
  $.register({
    rule: {
      host: /^bc\.vc$/,
      path: /^\/.+/,
    },
    ready: function () {
      $.removeNodes('iframe');

      var result = searchScript(false);
      if (!result.direct) {
        return knockServer2(result.script);
      }

      result = result.script.match(/top\.location\.href = '([^']+)'/);
      if (!result) {
        throw new _.AdsBypasserError('script changed');
      }
      result = result[1];
      return result.link();
    },
  });

  function run (dirtyFix) {
    // prevent redirection by iframe
    $.removeNodes('iframe');

    var result = searchScript(true);
    if (!result.direct) {
      return knockServer(result.script,dirtyFix);
    }

    result = result.script.match(/top\.location\.href='([^']+)'/);
    if (!result) {
      throw new _.AdsBypasserError('script changed');
    }
    result = result[1];
    return result.link();
  }

  // adcrun.ch
  $.register({
    rule: {
      host: /^adcrun\.ch$/,
      path: /^\/\w+$/,
    },
    ready: function () {
      // Try to bypass the survey
      $.removeNodes('.user_content');

      var rSurveyLink = /http\.open\("GET", "api_ajax\.php\?sid=\d*&ip=[^&]*&longurl=([^"]+)" \+ first_time, (?:true|false)\);/;
      var l = $.searchScripts(rSurveyLink);
      // Redirect to the target link if we found it
      if (l) {
        return l[1].link();
      }

      // Otherwise it's most likely a simple bc.vc-like link
      // Malformed JSON
      return run(true);
    },
  });

  $.register({
    rule: {
      host: [
        /^1tk\.us$/,
        /^gx\.si$/,
        /^adwat\.ch$/,
        /^(fly2url|urlwiz|xafox)\.com$/,
        /^(zpoz|ultry)\.net$/,
        /^(wwy|myam)\.me$/,
        /^ssl\.gs$/,
        /^lin(c\.ml|k\.tl)$/,
        /^hit\.us$/,
        /^shortit\.in$/,
        /^(adbla|tl7)\.us$/,
        /^www\.adjet\.eu$/,
        /^srk\.gs$/,
        /^cun\.bz$/,
        /^miniurl\.tk$/,
        /^vizzy\.es$/,
        /^kazan\.vc$/,
        /^linkcash\.ml$/,
      ],
      path: /^\/.+/,
    },
    ready: run,
  });

  $.register({
    rule: {
      host: /^adtr\.im|ysear\.ch|xip\.ir$/,
      path: /^\/.+/,
    },
    ready: function () {
      var a = $.$('div.fly_head a.close');
      var f = $.$('iframe.fly_frame');
      // the iframe may be an ad link
      // so also check the close button
      if (a && f) {
        return f.src.link();
      } else {
        return run();
      }
    },
  });

  $.register({
    rule: {
      host: /^ad5\.eu$/,
      path: /^\/[^.]+$/,
    },
    ready: function() {
      $.removeNodes('iframe');
      var s = searchScript(true);

      // Find the form
      var m = s.script.match(/(<form name="form1"method="post".*(?!<\\form>)<\/form>)/);

      if (!m) {
        return;
      }

      m = m[1];

      // Set the correct timezone
      var tz = -(new Date().getTimezoneOffset()/60);
      m = m.replace("'+timezone+'",tz);

      // Wrap the form into a useless div
      var d = document.createElement('div');
      d.setAttribute('id','AdsBypasserFTW');
      d.setAttribute('style', 'display:none;');

      // Feed with the right form
      d.innerHTML = m;
      document.body.appendChild(d);

      // Redirect to next page
      $('#AdsBypasserFTW > form[name=form1]').submit();
    },
  });

  $.register({
    rule: {
      host: /^tr5\.in$/,
      path: /^\/.+/,
    },
    ready: function () {
      // Malformed JSON
      return run(true);
    },
  });

})();
