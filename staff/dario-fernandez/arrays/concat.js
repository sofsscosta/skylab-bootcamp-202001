'use strict'

function concat() {
    var newArray = []
    for(var i = 0; i < arguments.length; i++) {
        for(var j = 0; j < arguments[i].length; j++) {
            newArray[newArray.length] = arguments[i][j]
        }
    }
    return newArray
}


// ------TEST---------

// var array1 = [1, 2, 3]
// var array2 = [4, 5, 6]
// var array3 = [7, 8, 9]

// console.log(concat(array1, array2, array3))
