_.register({
  rule: {
    host: /^prntscr\.com$/
  },
  async ready () {
    const i = $('#screenshot-image');
    await $.openImage(i.src);
  },
});
