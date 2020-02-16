'use strict'

function shift(array){
    for(var i=1; i<array.length; i++) 
    array[i-1] = array[i];
    
    array.length--;
    
    return array;
}

