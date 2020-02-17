'use strict'

function lastIndexOf(array, callback){
    var index;
    for(var i=array.length-1; i>0; i--){
        if(array[i]===callback){
            return i;
        }
    }
    
}