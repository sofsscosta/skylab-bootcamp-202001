'use strict'

function findIndex(array, expresion) {
    for(var i = 0; i < array.length; i++) {
        if(expresion(array[i])) {
             return i
        }
    }
    return -1
}

// ---------TEST---------

// var testArray = [1, 2, 3, 4, 5]

// console.log('Should print 2 ==> ' + find(testArray, function(element) {
//     return element >= 3
// }))