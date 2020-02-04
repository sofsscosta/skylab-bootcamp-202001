'use strict';

function reverse (array){

    if (!(array instanceof Array)) { throw new TypeError(array +' is not an Array')};

    var array = [];
    for (var i = 0; i < array.length; i++ ){
        array[(array.length -1) - i] = array[i];
    }
    return array;

}