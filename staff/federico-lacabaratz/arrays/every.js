'use strict';

function every(arr1, condition) {
    
    var result = true;
    
    for (var i=0; i<arr1.length; i++) {
        
        if (!condition(arr1[i])) {
            result = false;
            break;
        };
     
    };
    return result;
};