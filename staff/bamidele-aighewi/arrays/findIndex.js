'use strict';
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

The findIndex() method returns the index of the first element in the array that satisfies the provided testing 
function. Otherwise, it returns -1, indicating that no element passed the test.

- return value
    The index of the first element in the array that passes the test. Otherwise, -1.
*/

function findIndex(array, callback) {
    var result;
    for (var x = 0; x < array.length; x++) {
        var element = array[x];
        var response = callback(element, x, array);
        if (response) {
            result = x;
            break;
        }
    }

    return result;
}