'use strict'

function reduce(array,callback, initialVal){
    if(!(array instanceof Array)) throw new TypeError(array + " should be an error");
    var accumulator = initialVal || 0;
    for(var i=0; i<array.length; i++){
        accumulator = callback(accumulator,array[i], i);
    }
    
    return accumulator;
}

function callback(accumulator, currenValue, index){
    return accumulator + currenValue;
}


