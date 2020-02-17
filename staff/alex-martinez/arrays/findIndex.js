'use strict'

function find(array,callback){
    for(var i=0; i<array.length; i++){
        if(array[i] === callback){
            return i;
        }
    }
}