'use strict'

function slice(array, startIndex, stopIndex = array.length) {
    if(!(array instanceof Array)){
        throw new TypeError (array + ` is not an array`);
    };
    var newArray = [];
    if(typeof startIndex === 'number' && typeof stopIndex === 'number'){
        for(var i = startIndex; i < stopIndex; i++) {
            newArray[newArray.length] = array[i];
        }
    }
    return newArray;
};