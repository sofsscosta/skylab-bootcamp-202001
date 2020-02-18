'use strict'
var a = [1, 2, 3, 4];

var b = toString(a);
console.log('TEST toString(a)');
console.assert(b.__proto__.constructor.name === "String", 'The result shoukd be a string');