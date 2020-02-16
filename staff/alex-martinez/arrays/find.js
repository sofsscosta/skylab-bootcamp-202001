'use strict'

function find(array,callback){
    if(!(array instanceof Array)) throw new TypeError(array + ' ' + 'is not an array ');
    
    for(var i=0; i<array.length; i++){
        if(array[i] === callback){
            return array[i];
        }
    }
}

function callback(element){
    return element;
}