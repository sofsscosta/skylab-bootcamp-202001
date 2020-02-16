'use strict';

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

The push() method adds one or more elements to the end of an array and returns the new length of the array.

- return value
The new length property of the object upon which the method was called.
*/

function push(array, newValue) {
    array[array.length] = newValue;
    return array.length;
}