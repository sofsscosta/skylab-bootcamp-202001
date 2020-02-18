'use strict'
var a = [1, 2, 3, 4];

var b = join(a, '*');

console.log('TEST join()');
console.assert(b.length === (a.length + (a.length-1)), 'length of this join should be 7');