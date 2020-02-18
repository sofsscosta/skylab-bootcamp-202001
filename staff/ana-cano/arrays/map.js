'use strict'

function map(array, expression) {
    //if (!(array instance Array)) throw new TypeError(array + "is not an array ");
    //if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function');
    var newArray = []
    for (var i = 0; i < array.length; i++) {
        newArray[newArray.length] = expression(array[i])
    }
    return newArray
}


// Para probarlo map (a, function(value){ return value*2})