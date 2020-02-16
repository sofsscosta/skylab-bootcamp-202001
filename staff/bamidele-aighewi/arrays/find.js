'use strict';
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

The find() method returns the value of the first element in the provided array that satisfies the provided testing function.

- return value
    The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
*/

function find(array, callback) {
    var result;
    for(var x = 0; x < array.length; x++) {
        var element = array[x];
        var response = callback(element, x, array);
        if (response) {
            result = element;
            break;
        }
    }

    return result;
}