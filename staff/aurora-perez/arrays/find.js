'use strict'

function find(array, expression) {
    if (!(array instanceof Array)) {throw new TypeError (array + ' is not an array.')};
    if (typeof expression !== 'function') {throw new TypeError (expression + ' is not a function.')};

    var result;
    for (var i = 0; i < array.length; i++) {
        if (expression(array[i])) {
            result = array[i]; 
            i = array.length;
        } else {
            result = undefined;
        };
    };
    return result;
};