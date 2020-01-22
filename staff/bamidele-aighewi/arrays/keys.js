'use strict';

/*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys

The keys() method returns a new Array Iterator object that contains the keys for each index in the array.

- return value
    A new Array iterator object.
*/

function keys(array) {
    var keys = [];

    for (var x = 0; x < array.length; x++) {
        keys[keys.length] = x;
    }

    return keys;
}