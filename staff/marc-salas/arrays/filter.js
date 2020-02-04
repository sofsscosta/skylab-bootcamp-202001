'use strict';

function filter (array, condition){
    if (!(array instanceof Array)) { throw new TypeError(array +' is not an Array')};
    if (!(typeof condition === "function")) { throw new TypeError (condition + ' in not a Function')}
    var result = [];
    
    for (var i =0; i < array.length; i++){
        if (condition(array[i])){
            result[result.length] = array[i];
        }

    }
    return result;
}