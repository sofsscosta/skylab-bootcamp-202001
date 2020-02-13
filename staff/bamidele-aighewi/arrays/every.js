'use strict';

/*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

The every() method tests whether all elements in the array pass 
the test implemented by the provided function. It returns a Boolean value.

- return value
    true if the callback function returns a truthy value for every array element. Otherwise, false.
*/

function every(array, callback) {
    var response = true;

    for(var x = 0; x < array.length; x++) {
        if(!callback(array[x], x, array)) {
            response = false;
            break;
        }
    }

    return response;
}