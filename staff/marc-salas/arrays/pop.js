'use strict'

function pop(array){
    if (!(array instanceof Array)) { throw new TypeError(array +' is not an Array')};
    var result = array[array.length -1 ];
    array.length = array.length - 1;
    return result;
}