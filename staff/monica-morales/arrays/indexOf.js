'use strict';

function indexOf(arr, value){
    if(arr === undefined || value === undefined) throw new TypeError('Is necesary put an array'); 
    for( var i = 0; i<arr.length; i++){
        if(arr[i] === value){
        return i;
        }
    }
    return -1;
};