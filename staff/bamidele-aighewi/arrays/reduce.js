'use strict';

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

The reduce() method executes a reducer function (that you provide) on each 
element of the array, resulting in a single output value.

- return value
The single value that results from the reduction.
*/

function reduce(array, callback, initialValue) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array. ' + (typeof array) + ' given');
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function. ' + (typeof callback) + ' given');
    if (typeof initialValue !== 'undefined' && typeof initialValue !== 'number') throw new TypeError(initialValue + ' is not a number. ' + (typeof initialValue) + ' given');

    var accumulator = typeof initialValue !== 'undefined' ? initialValue : 0;

    for(var x = 0; x < array.length; x++) {
        var value = array[x];
        accumulator = callback(accumulator, value, x, array);
    }

    return accumulator;
}