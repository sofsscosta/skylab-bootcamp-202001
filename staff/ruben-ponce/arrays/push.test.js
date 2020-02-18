'use strict'
var a = [1, 2, 3, 4];

var b = push(a, 5);

console.log('TEST push');
console.assert(a.length === b.length, 'The new array should be same length than old array');