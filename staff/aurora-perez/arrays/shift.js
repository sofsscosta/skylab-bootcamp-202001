'use strict'

function shift (array){
    if (!(array instanceof Array)) { throw TypeError ( array + ' is not an array.')}

    var result = [];
    if (array.length==0){
        return undefined;
    }else{
        result = array [0]
        for (var i =0; i< array.length; i++){  
            array [i] = array[i+1];
        };
        array.length=array.length-1;
    };
    return result;
};

