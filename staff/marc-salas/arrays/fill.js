'use strict'

function fill(array,value,index = 0,end = array.length){
    index = index || 0;
    end = end || array.length;
    if (!(array instanceof Array)) { throw new TypeError(array +' is not an Array')};
    for (var i = index; i < end; i++){
        array[i] = value;
    }
    return array;
}