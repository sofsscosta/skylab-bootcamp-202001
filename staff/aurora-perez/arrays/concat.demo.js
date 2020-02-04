'use strict'

console.log("DEMO concat-----------------------");

var a =['a', 'b', 'c'];
var a2= ['d','e','f'];
console.log('it should return a new array (without modifying the arguments) with all added arrays concated: ', concat(a, a2), a, a2);

var b = [1, 2, 3];
var b1 = ['a', 'b', 'c'];
var b2 = [4, 5, 6];
console.log('it should return a new array (without modifying the arguments) with all added arrays concated: ', concat(b, b1, b2), b, b1, b2);

var c = ['a', 'b', 'c'];
var c1 = [[1, 2, 3], [4, 5, 6]];
console.log('it should return a new array (without modifying the arguments) with all added arrays concated: ', concat(c, c1), c, c1);