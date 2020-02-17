'use strict'
var a = [1, 2, 3, 4];

var b = pop(a);
console.log('TEST pop()')
console.assert(b.length === a.length-1, 'The length are -1 of original array');