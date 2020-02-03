'use strict'

function of() {
    var newArray = []
    for(var i = 0; i < arguments.length; i++) {
        newArray[newArray.length] = arguments[i]
    }
    return newArray
}

// --------TEST---------

// of(1, 2, 3, 'cuatro', '5', 'seis')