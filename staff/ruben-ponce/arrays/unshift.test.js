'use strict'
var a = [1, 2, 3, 4];

var b = unshift(0);

console.log('TEST unshift(0)');
console.assert(a.length+1 === b.length,'A');