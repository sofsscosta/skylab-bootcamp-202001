'use strict'
var a = [1, 2, 3, 4];

var b = shift(a);

console.log('TEST shift');
console.assert(a.length = b.length-1, 'The new array should got -1 length');