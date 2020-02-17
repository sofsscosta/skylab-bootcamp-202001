'use strict';
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

The join() method creates and returns a new string by concatenating all of the elements 
in an array (or an array-like object), separated by commas or a specified separator string. 
If the array has only one item, then that item will be returned without using the separator.

- return value
A string with all array elements joined. If arr.length is 0, the empty string is returned.
*/

function join(array, separator) {
    separator = typeof separator !== 'undefined' ? separator : ',';
    var result = '';

    for (var x = 0; x < array.length; x++) {
        result += array[x]
        if((x + 1) !== array.length){
            result += separator
        }
    }

    return result;
}