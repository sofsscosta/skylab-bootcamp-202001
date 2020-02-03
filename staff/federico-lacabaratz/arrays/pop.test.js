'use strict'

console.log('------------------------ TEST Pop ------------------------');

var numbers = [2, 34, 56, 33, 2, 10];
var results = pop(numbers);

console.log('Verifies that the lenght of the array is now 5')
console.assert(results.length === 5, 'The array should be 5, instead of this is = '+results.length);

console.log('Verifies that the last value is 2')
console.assert(results[results.length - 1] === 2, 'The las value of the array should be 2, instead is = '+results[4]);
