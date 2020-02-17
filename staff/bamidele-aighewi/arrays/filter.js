'use strict';

/*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

The filter() method creates a new array with all elements that 
pass the test implemented by the provided function.

- return value
    A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
*/

function filter(array, callback) {
    if(!(array instanceof Array)) throw new TypeError(array + ' is not an Array, ' + (typeof array) + ' given');
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function, ' + (typeof callback) + ' given');

    var response = [];

    for (var x = 0; x < array.length; x++) {
        if (callback(array[x], x, array)) {
            response[response.length] = array[x];
        }
    }
    
    return response;
}