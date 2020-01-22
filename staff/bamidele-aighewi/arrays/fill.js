'use strict';
/*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

The fill() method changes all elements in an array to a static value, 
from a start index (default 0) to an end index (default array.length). 
It returns the modified array.

- return value
    The modified array, filled with value.
*/

function fill(array, value, start, end) {
    if(!array) return array;

    start = typeof start === 'undefined' ? 0 : start;
    end = typeof end === 'undefined' ? array.length : end;

    if (end > array.length) end = array.length;

    for(var x = start; x < end; x++) {
        array[x] = value;
    }

    return array;
}