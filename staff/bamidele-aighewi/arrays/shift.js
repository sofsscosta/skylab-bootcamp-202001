'use strict';

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

The shift() method removes the first element from an array and returns that removed element. 
This method changes the length of the array.

- return value
The removed element from the array; undefined if the array is empty.
*/

function shift(array) {
    if (!array.length) {
        return;
    }

    var toRemove = array[0];
    var oldArray = array;
    var loop = 0;

    for (var x = 1; x < oldArray.length; x++) {
        array[loop] = oldArray[x]
        loop++;
    }

    array.length = array.length - 1;
    return toRemove;
}

