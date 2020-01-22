'use strict';

/*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries

The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

- return value
    A new Array iterator object.
*/

function entries(array) {
    var tmpArray = [];

    for(var x = 0; x < array.length; x++) {
        tmpArray[tmpArray.length] = [x, array[x]];
    }

    function next(index) {
        index = typeof index === 'undefined' ? 0 : index;
        if(index > tmpArray.length) index = tmpArray.length;

        return tmpArray[index]
    }

    return { next };
}

//entries([1, 2, 3, 4, 5, 6]).next(0) 