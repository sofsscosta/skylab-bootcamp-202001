'use strict'

function splice(array,start,deleteCount,item){
    if(!(array instanceof Array)) throw new TypeError(array + ' is not an array');
    var result = [];
    
    for(var i=start; i<deleteCount+1; i++){
        result[result.length] = array[i];
    }
    
    
    return result;

}
