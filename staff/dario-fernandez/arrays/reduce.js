'use strict'

function reduce(array, expresion) {
    var reducedValue = 0
    for (var i = 0; i < array.length; i++) {
        reducedValue = expresion(reducedValue, array[i])
    }
    return reducedValue
}