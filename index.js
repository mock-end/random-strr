'use strict';

var toLength      = require('to-length');
var randomChar    = require('random-char');
var randomNatural = require('random-natural');

module.exports = function (options) {

  options = options || {};

  var length = options.length;

  if (length) {
    length = toLength(options.length);
  }

  if (!length) {

    if (options.min || options.max) {
      length = randomNatural(options);
    } else {
      length = randomNatural({ min: 5, max: 20, inspected: true });
    }
  }

  var result = '';

  while (length--) {
    result += randomChar(options);
  }

  return result;
};
