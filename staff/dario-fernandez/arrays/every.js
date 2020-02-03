'use strict'

function every(array, expression) {
    if(!(array instanceof Array)){
        throw new TypeError(array + ' is not an array')
    }
    if(!(typeof expression === 'function')){
        throw new TypeError(expression + ' is not a function')
    }
    for(var i = 0; i < array.length; i++) {
        if(!expression(array[i])){
            return false
        }
    }
    return true
}

// --------TEST-------------
// var numbers = [3, 3, 2, 3, 3, 3]
// console.log(every(numbers, function(number){
//     return number === 3
// }))