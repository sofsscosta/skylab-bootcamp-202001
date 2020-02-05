'use strict'
function map(array, expression) { 
    if(typeof expression !== "function"){
        throw new TypeError (expression +' is not a function');
    };
    if (!(array instanceof Array)){
        throw new TypeError (array + ' is not an array')
    }

    var result = [];
    for (var i = 0; i < array.length; i++) {
        result[i] = expression(array[i]);
    }
    return result;
};