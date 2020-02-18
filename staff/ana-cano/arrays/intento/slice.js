'use strict'

function fill(array, value, startIndex, stopIndex) {
    startIndex = startIndex || 0
    stopIndex = stopIndex || array.length

    for (var i = startIndex; i < stopIndex; i++) {
        array[i] = value
    }
    return array
}

// ----------TEST-----------

// var testArray = [1, 2, 3, 4, 5]

// console.log('Should print [a, a, a, a, a] ==> ' + fill(testArray, 'a'))
// console.log('Should print [1, 2, 2, 2, 2] ==> ' + fill(testArray, 2, 2))
// console.log('Should print [1, a, a, a, 5] ==> ' + fill(testArray, 'a', 1, 4))