'use strict';

var expect = require('chai').expect;


describe('random-string: ', function () {

  var randomString = require('../../');

  it('common', function () {

    var count = 100;

    while (count--) {

      expect(randomString())
        .to.be.a('string')
        .and
        .to.have.length.within(5, 20);

      expect(randomString({ length: 30 })).to.have.length(30);

      expect(randomString({
        length: 30,
        pool: 'abc'
      })).to.be.match(/^[abc]{30}$/);

      expect(randomString({ min: 10, max: 30 })).to.have.length.within(10, 30);
    }
  });
});
