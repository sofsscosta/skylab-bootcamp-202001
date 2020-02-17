'use strict'

function push(arr){
    for(var i=1; i<arguments.length; i++){
        arr[arr.length] = arguments[i];
    }
    return arr.length;
}

/*
function push(arr,value){
    arr[arr.length] = value;
    return arr;
}
*/




