'use strict'

function find(array, expresion) {
    for(var i = 0; i < array.length; i++) {
        if(expresion(array[i])) {
            return array[i]
            break
        }
    }
}

// ---------TEST---------

// var testArray = [1, 2, 3, 4, 5]

// console.log('Should print 3 ==> ' + find(testArray, function(element) {
//     return element >= 3
// }))