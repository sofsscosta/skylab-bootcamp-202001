'use strict'

var a = [1, 2, 3, 4];

var b = reverse(a);

console.log('TEST reverse()');

console.assert(a.length === b.length, 'should be the same length');
console.assert(a[0] === b[3], 'should be the same value');
console.assert(a[1] === b[2], 'should be the same value');
console.assert(a[2] === b[1], 'should be the same value');
console.assert(a[3] === b[0], 'should be the same value');
