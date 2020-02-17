'use strict';
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

The includes() method determines whether an array includes a certain value among its 
entries, returning true or false as appropriate.

- return value
A Boolean which is true if the value valueToFind is found within the array 
(or the part of the array indicated by the index fromIndex, if specified).
*/

function includes(array, toFind, fromIndex) {
    fromIndex = typeof fromIndex !== 'undefined' ? fromIndex : 0;
    var result = false;
    if (fromIndex > array.length) return false;

    for (var x = fromIndex; x < array.length; x++) {
        var element = array[x];
        if (element === toFind) {
            result = true;
            break;
        }
    }

    return result;
}