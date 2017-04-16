_.register({
  rule: {
    host: /^short.am$/,
  },
  async ready () {
    // somehow the recaptcha can be skipped, lucky one
    // wait few seconds to avoid infinity loop
    await _.wait(5000);
    await $.openLink('', {
      post: {
        image: 'Continue',
      },
    });
  },
});
