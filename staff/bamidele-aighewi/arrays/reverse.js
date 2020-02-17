'use strict';

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

The reverse() method reverses an array in place. 
The first array element becomes the last, and the last array element becomes the first.

- Return value
    The reversed array.
*/

function reverse(array) {
    var tmpArray = [];
    var loop = 0;
    for(var x = (array.length - 1); x != -1; x--) {
        tmpArray[loop] = array[x];
        loop++;
    }

    array = tmpArray;
    return array;
}