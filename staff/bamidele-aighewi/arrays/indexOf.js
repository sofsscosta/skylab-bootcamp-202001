'use strict';
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

- return value
The first index of the element in the array; -1 if not found.
*/

function indexOf(array, toFind, fromIndex) {
    fromIndex = typeof fromIndex !== 'undefined' ? fromIndex : 0;
    var result = -1;
    if (fromIndex > array.length) return false;

    for (var x = fromIndex; x < array.length; x++) {
        var element = array[x];
        if (element === toFind) {
            result = x;
            break;
        }
    }

    return result;
}