// all blog type belong here?

_.register({
  rule: [
    {
      host: [
        /^(www\.)?sylnk\.net$/,
        /^dlneko\.(com|net|org)$/,
        /^rumahsimpel\.com$/,
      ],
      query: /link=([^&]+)/,
    },
    {
      host: /^(www\.)?compul\.in$/,
      path: /^\/[np]\.php$/,
      query: /v=([^&]+)/,
    },
    {
      host: /^(www\.)?safelinkair\.com$/,
      path: /^\/code$/,
      query: /(?:\?|&)link=([a-zA-Z0-9\/=]+)(?:$|&)/,
    },
    {
      host: [
        /^link\.filmku\.net$/,
        /^www\.healthygress24\.ga$/,
        /^kombatch\.amankan\.link$/,
      ],
      path: /^\/p\/(go|healty-lie)\.html$/,
      query: /^\?url=([a-zA-Z0-9\/=]+)$/,
    },
    {
      host: [
        /^(gadget|auto|sports)14\.pw$/,
        /^motosport\.pw$/,
        /^nar-04\.tk$/,
        /^lindung\.in$/,
        /^motonews\.club$/,
        /^ww[23]\.picnictrans\.com$/,
        /^gadget13\.com$/,
        /^azhie\.net$/,
      ],
      query: /^\?d=([a-zA-Z0-9\/=]+)$/,
    },
    {
      host: /^www\.anisubsia\.tk$/,
      path: /^\/p\/link\.html$/,
      query: /^\?url=([a-zA-Z0-9\/=]+)$/,
    },
    {
      host: [
        /^www\.insurance1\.tech$/,
        /^www\.freeanimeonline\.xyz$/,
      ],
      query: /^\?site=([a-zA-Z0-9\/=]+)/,
    },
    {
      host: /^i\.gtaind\.com$/,
      query: /^\?([a-zA-Z0-9\/=]+)$/,
    },
    // blogspot, kind of brutal
    {
      host: /\.blogspot\.com?/,
      query: /^\?url=([a-zA-Z0-9\/=]+)$/,
    },
    {
      host: /^sehatlega\.com$/,
      query: /^\?lanjut=([a-zA-Z0-9\/=]+)$/,
    },
  ],
  async start (m) {
    const rawLink = atob(m.query[1]);
    await $.openLink(rawLink);
  },
});

_.register({
  rule: [
    {
      host: [
        // safelinkconverter.com
        // safelinkconverter2.com
        // link.safelinkconverter.com
        // decrypt.safelinkconverter.com
        /(^|\.)safelinkconverter2?\.com$/,
        // safelinkreview.com
        // safelinksreview.com
        // safelinkreviewer.com
        // safelinkreview.co
        /^safelink(s?review(er)?)\.com?$/,
        /^susutin\.com$/,
        /^(getcomics|miuitutorial)\.gq$/,
        /^awsubs\.cf$/,
      ],
      query: /id=(\w+=*)/,
    },
    {
      host: [
        /^(www\.)?dlneko\.com$/,
        /^(satuasia|tawaku)\.com$/,
        /^ww3\.manteb\.in$/,
        /^link\.filmku\.net$/,
        /^www\.muucih\.com$/,
        /^(naisho|filmku)\.lompat\.in$/,
        /^edogawa\.lon\.pw$/,
      ],
      query: /go=(\w+=*)/,
    },
  ],
  async start (m) {
    let l = atob(m.query[1]);
    const table = {
      '!': 'a',
      ')': 'e',
      '_': 'i',
      '(': 'o',
      '*': 'u',
    };
    l = l.replace(/[!)_(*]/g, function (m) {
      return table[m];
    });
    await $.openLink(l);
  },
});

_.register({
  rule: {
    host: /^(www\.)?safelinkreview\.com$/,
    path: /^\/\w+\/cost\/([\w\.]+)\/?$/,
  },
  async start (m) {
    const l = 'http://' + m.path[1];
    await $.openLink(l);
  },
});

_.register({
  rule: {
    host: [
      /^designinghomey\.com$/,
      /^motonews\.club$/,
      /^(autofans|landscapenature)\.pw$/,
      /^ani-share\.com$/,
      /^sinopsisfilmku\.com$/,
      /^sidespace\.net$/,
    ],
    query: /get=([^&]+)/,
  },
  async ready (m) {
    let s = $.searchFromScripts(/const a='([^']+)'/);
    if (s) {
      await $.openLink(s[1]);
      return;
    }
    s = atob(m.query[1]);
    await $.openLink(s);
  },
});

_.register({
  rule: {
    host: /^kombatch\.loncat\.pw$/,
  },
  async ready () {
    let s = $.searchFromScripts(/\.open\("([^"]+)",/);
    s = s[1].match(/go=([^&]+)/);
    s = atob(s[1]);
    await $.openLink(s);
  },
});

_.register({
  rule: {
    host: /^ww[23]\.picnictrans\.com$/,
  },
  async ready () {
    const a = $('div.kiri > center > a');
    await $.openLink(a.href);
  },
});
