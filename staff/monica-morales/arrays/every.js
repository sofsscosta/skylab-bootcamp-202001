'use strict';

function every(array, condition){
    var result = true;
    for (var i=0; i<array.length; i++){
        if(!condition(array[i])){
            result = false;
            break;
        };
    };
    return result;
};