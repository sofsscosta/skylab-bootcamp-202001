'use strict'


function fill(array, value, startIndex, stopIndex) {
    startIndex = startIndex || 0
    stopIndex = stopIndex || array.length

    for(var i = startIndex; i < stopIndex; i++) {
        array[i] = value
    }
    return array
}