'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isEven = require('@myorg/is-even');

function isOdd(x) {
    return !isEven.isEven(x);
}

exports.isOdd = isOdd;
