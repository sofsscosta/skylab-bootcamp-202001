'use strict'

function reduce(array,func, initial){

    if (!(array instanceof Array)) { throw new TypeError(array +' is not an Array')};
    if (!(typeof func === "function")) { throw new TypeError (func + ' in not a Function')} 
    var result = initial || 0;
    for (var i = 0; i < array.length; i++){
        result = func(result, array[i]);
    }
    return result;
}