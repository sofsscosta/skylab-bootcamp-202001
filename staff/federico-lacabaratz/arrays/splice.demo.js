'use strict';

console.log('DEMO splice');

console.log('Verifies it remove elements in index 2, 3, 4 from the original array and returns a new array with the removed values');

var array = [1, 2, 3, 4, 5, 6];
splice(array, 2, 3);

console.log('Verifies it returns a new array with values from index 2, 3, 4, then removes them from the original array by replacing the index with the given string');

var array = [1, 2, 3, 4, 5, 6];
splice(array, 2, 3, 'value');

console.log('Verifies it returns a new array with values from index 2, 3, 4, then removes them from the original array by replacing the index with the given number');

var array = [1, 2, 3, 4, 5, 6];
splice(array, 2, 3, 15);