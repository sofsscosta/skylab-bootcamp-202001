'use strict'

console.log('DEMO pop---------------------------');

var a = [1, 2, 3];
pop(a);
console.log('it should return the same array with the last value substracted', a);

var b = [];
pop(b);
console.log("it should return undefined", b);

var c = ['a', 'b', [1, 2, 3]];
pop(c);
console.log('it should return the same array with the last value, other array, substracted', c);