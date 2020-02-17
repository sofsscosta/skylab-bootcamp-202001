'use strict';

/*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

The forEach() method executes a provided function once for each array element.

- return value
    
*/

function forEach(array, callback) {
    for (var x = 0; x < array.length; x++) {
        callback(array[x], x, array)
    }
}