'use strict';

function includes(arr1, num) {
    
    var result = false
    
    for (var i=0; i<arr1.length; i++) {
        
        if (arr1[i] === num) {
            result = true;
            break;
        };
     
    };
    return result;
};

/* Otra forma de resolverlo

function includes(arr1, num) {
    
    for (var i=0; i<arr1.length; i++) {
        
        if (arr1[i] === num) {
            return true
        };
     
    };
    return false;
};
*/