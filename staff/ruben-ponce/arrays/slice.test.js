'use strict'
var a = [1, 2, 3, 4, 5, 6];

console.log('TEST 1 slice(a,1)')
var b = slice(a, 1);
console.assert(b.length === 5,'Length should be 5');

var a = [1, 2, 3, 4, 5, 6];
console.log('TEST 2 slice(a,2,4)')
var b = slice(a, 2, 4);
console.assert(b.length === 2,'Length should be 2');

