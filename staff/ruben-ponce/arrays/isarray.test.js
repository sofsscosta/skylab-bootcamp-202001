'use strict'
var a = [1, 2, 3, 4];

var b = isarray(a);
console.log('TEST isarray()');
console.assert(b === true, 'a is not Array!');