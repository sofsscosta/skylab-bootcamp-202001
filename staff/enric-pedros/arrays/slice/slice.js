'use strict'

function slice(array, startIndex, stopIndex = array.length) {
    var newArray = []

    if (startIndex <= 0){
        startIndex += array.length
    }
    if(stopIndex <=0){
        stopIndex += array.length
    }
    for(var i = startIndex; i < stopIndex; i++) {
        newArray[newArray.length] = array[i]
    }
    return newArray
}
