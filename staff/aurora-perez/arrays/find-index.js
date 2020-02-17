'use strict'

function findIndex (array, expression) {
    if (!(array instanceof Array)) {throw new TypeError(array + ' is not an array.')};
    if (typeof expression !== 'function') {throw new TypeError(expression + ' is not a function.')};
    
    var result = -1;
    for (var i = 0; i < array.length; i++){
        if (expression(array[i])){
            result = i;
            i = array.length;
        };
    };
    return result;
}

