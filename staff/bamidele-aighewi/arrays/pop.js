'use strict';

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

- return value
The removed element from the array; undefined if the array is empty.
*/

function pop(array) {
    if (!array.length){
        return
    }

    
    var toRemove = array[array.length - 1];
    array.length = array.length - 1;
    return toRemove;
}