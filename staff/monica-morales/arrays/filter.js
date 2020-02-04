'use strict'

function filter(array, expression){
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an Array');
   
    var array2 = [];
    for(var i =0; i<array.length; i++){
        if(expression(array[i])){
            array2[array2.length] = array[i];
        };
    };
    return array2;
};