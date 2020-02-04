'use strict';

function push (array, values){
    if (!(array instanceof Array)) { throw new TypeError(array +' is not an Array')};

    for (var i=1; i < arguments.length; i++){
    
        array[array.length] = arguments[i];
    }
}