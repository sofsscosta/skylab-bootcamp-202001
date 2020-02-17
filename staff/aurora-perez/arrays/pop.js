'use strict'

function pop(array) {
    if (!(array instanceof Array)){
        throw new TypeError ( array +" is not an Array")
    } 

    if (array.length === 0) {
        array[0] = undefined;
        return array[0];
    } else {
        array.length = array.length-1;
    }
};