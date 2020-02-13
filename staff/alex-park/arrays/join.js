'use strict'

function join (array, separator) {
    if (!(array instanceof Array)) {throw new TypeError(array + ' is not an array.')};

    var result = '';
    for (var i = 0; i < array.length; i++){
        if ( i == array.length -1) {
            result += `${array[i]}`;
        } else {
        result += `${array[i]}`+ `${separator}`;
        };
    };
    return result;
};