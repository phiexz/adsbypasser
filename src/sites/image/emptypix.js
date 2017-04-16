_.register({
  rule: [
    {
      host: [
        /^emptypix\.com|overdream\.cz$/,
        /^www\.sexseeimage\.com$/,
        /^imgdomino\.com$/,
      ],
      path: /^\/image\//,
    },
    {
      host: /^10\.imageleon\.com$/,
      path: /^\/img-(.+)\.html$/,
    },
  ],
  async ready () {
    const img = $('#full_image');
    await $.openImage(img.src);
  },
});

_.register({
  rule: {
    host: /^sexyxpixels\.com$/,
    query: /^\?v=/,
  },
  async ready () {
    const img = $('#full_image');
    await $.openImage(img.src, {
      referer: true,
    });
  },
});
