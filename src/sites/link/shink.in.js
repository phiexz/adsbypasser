_.register({
  rule: {
    host: [
      /^(www\.)?shink\.in$/,
      /^fas\.li$/,
      /^(www\.)?croco\.(me|site)$/,
    ],
    path: /^\/\w+$/,
  },
  async ready () {
    const f = $('#skip');

    if (!$.$('#captcha')) {
      // No captcha, we can redirect straight away
      f.submit();
    }

    // Remove the popup trigger area.
    // NOTE it will add the node back immediately, maybe it will becomes very
    // buzy.
    var o = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
          if (node.localName === 'div') {
            if (node.style.zIndex === '2147483647') {
              node.parentNode.removeChild(node);
              return;
            }
          }
        });
      });
    });

    o.observe(document.body, {
      childList: true,
      subtree: true,
    });
  },
});

_.register({
  rule: [
    {
      host: [
        /^(www\.)?shink\.in$/,
        /^fas\.li$/,
      ],
      path: /^\/go\/\w+$/,
    },
    {
      host: /^(www\.)?croco\.(me|site)$/,
      path: /^\/ok\/\w+$/,
    },
  ],
  async ready () {
    let a = $('#btn-main');
    const i = a.href.lastIndexOf('http');
    a = a.href.substr(i);
    await $.openLink(a);
  },
});
