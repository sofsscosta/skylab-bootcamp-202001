'use strict';

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

The slice() method returns a shallow copy of a portion of an array into a new array object 
selected from begin to end (end not included) where begin and end represent the index of 
items in that array. The original array will not be modified.

- return value
A new array containing the extracted elements.
*/

function slice(array, start, end) {
    var newArray = [];

    if (!array) return newArray;

    end = typeof end !== 'undefined' ? end : array.length;
    start = typeof start !== 'undefined' ? start : 0;
    if(end < start) end = array.length;

    for(var x = start; x < end; x++) {
        newArray[newArray.length] = array[x];
    }

    return newArray;
}

console.log(slice([]))