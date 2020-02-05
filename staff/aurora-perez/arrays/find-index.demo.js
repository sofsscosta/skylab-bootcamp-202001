'use strict'

console.log('DEMO findIndex----------------------------');


var a = [1, 5, 10, 25, 100];
console.log('method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1: ', 
findIndex(a, function(value){ return value > 30;}));

var b = [1, 5, 10, 25, 100];
console.log('method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1: ', 
findIndex(b, function(value){ return value > 130;}));

var c = [1, 5, 1, 1, 5];
console.log('method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1', 
findIndex(c, function(value){ return value === 5;}));