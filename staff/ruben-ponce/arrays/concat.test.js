'use strict'
var a = [1, 2, 3, 4];
var b = [5, 6, 7, 8];

var c = concat(a,b);

console.log('TEST concat(a)');
console.assert(c === a,'The original array length should be +b.length');