var chai = require('chai');
var expect = chai.expect;
var Browser = require('zombie');

var toolkit = require('./misc/toolkit.js');

var ajax = require('../src/util/ajax.js');

var factory = toolkit.createFactory(ajax);


describe('ajax', function () {
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


  describe('$.get', function () {

    it('should get right content', function (done) {
      var self = this;
      this.browser.visit(toolkit.page1).then(function () {
        var $ = factory(self.browser);

        var tmp = $.get(toolkit.page2);
        self.browser.wait().then();
        return tmp;
      }).catch(function (error) {
        done(error);
      }).then(function (html) {
        html.length.should.equals(290);
        done();
      });
    });

  });


  describe('$.post', function () {

    it('should get right content', function (done) {
      var self = this;
      this.browser.visit(toolkit.page1).then(function () {
        var $ = factory(self.browser);

        var tmp = $.post(toolkit.page2);
        self.browser.wait().then();
        return tmp;
      }).catch(function (error) {
        done(error);
      }).then(function (html) {
        html.length.should.equals(290);
        done();
      });
    });

  });

});
