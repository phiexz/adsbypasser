var chai = require('chai');
var expect = chai.expect;
var Browser = require('zombie');

var toolkit = require('./misc/toolkit.js');

var link = require('../src/util/link.js');

var factory = toolkit.createFactory(link);


describe('link', function () {
  'use strict';

  before(function (done) {
    this.browser = new Browser();
    this.server = toolkit.createServer(done);
  });

  after(function () {
    this.server.close();
  });

  afterEach(function () {
    this.browser.tabs.closeAll();
  });


  describe('$.openLink', function () {

    // TODO: I don't think this test case is needed anymore
    it('should not accept invalid URL', undefined, function (done) {
      var self = this;
      this.browser.visit(toolkit.page1).catch(function (error) {
        done(error);
      }).then(function () {
        var $ = factory(self.browser);

        $.openLink(null);

        return self.browser.wait();
      }).then(function () {
        self.browser.window.location.toString().should.equals(toolkit.page1);

        done();
      });
    });

    it('should redirect to a valid URL', function (done) {
      var self = this;
      this.browser.visit(toolkit.page1).catch(function (error) {
        done(error);
      }).then(function () {
        var $ = factory(self.browser);

        var redirection = toolkit.page2.link()
        redirection();

        return self.browser.wait();
      }).then(function () {
        self.browser.window.location.toString().should.equals(toolkit.page2);
        done();
      });
    });

  });

});
