'use strict'

function slice(array,initialIndex = 0,lastIndex = 0){
    if(!(array instanceof Array)) throw new TypeError(array + ' is not an array');
    var newArray = [];
    
    if(initialIndex <= 0){
        initialIndex += array.length;
    }

    if(lastIndex <= 0){
        lastIndex += array.length;
    }

    for(var i = initialIndex; i<lastIndex; i++){
        newArray[newArray.length] = array[i];
    }
    return newArray;
}


