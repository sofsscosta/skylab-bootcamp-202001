'use strict';

function every (array, condition){
    if (!(array instanceof Array)) { throw new TypeError(array +' is not an Array')};
    if (!(typeof condition === "function")) { throw new TypeError (condition + ' in not a Function')}

    for (var i = 0; i < array.length; i++){
        
        if (!condition(array[i])){
            
            return false;
        }
    }
    return true;
}


