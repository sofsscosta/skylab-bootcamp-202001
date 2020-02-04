'use strict';

function flat(array, deep , acumulator) {
        
    if (!(array instanceof Array)) { throw new TypeError(array +' is not an Array')};
    
    deep  === undefined? deep =1 : null;
    
    var result = acumulator || [];
    
    for (var i =0; i < array.length; i++){
        
        if (array[i] instanceof Array && deep > 0){
            
            deep --
            
            flat(array[i], deep, result)
        
        } else {
            
            result[result.length] = array[i];
       
        }
    
    }
    
    return result;
}