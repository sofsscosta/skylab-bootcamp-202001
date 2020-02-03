'use strict';

console.log('DEMO flat');

console.log('Verifies the new array to be returned with values of the first inner array flattened',
result);

var array = [1, 2, 10, [9, 3, [8, 10, [11, 9]]]];
var result = flat(array);

console.log('Verifies the new array to be returned with the values from the two first nested arrays flattened',
result);

var array = [1, 2, 10, [9, 3, [8, 10, [11, 9]]]];
var result = flat(array, 2);

console.log('Verifies the new array to be returned with the values from the three first nested arrays flattened',
result);

var array = [1, 2, 10, [9, 3, [8, 10, [11, 9]]]];
var result = flat(array, 3);
    

console.log('Verifies the new array to be returned with all inner arrays flattened into a single array',
result);

var array = [1, 2, 10, [9, 3, [8, 10, [11, [9]]]]];
var result = flat(array, Infinity);
