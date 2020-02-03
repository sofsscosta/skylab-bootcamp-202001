'use strict'

function some(array, expresion) {
    debugger
    var bool = false
    for(var i = 0; i < array.length; i++) {
        if(expresion(array[i])){
            bool = true
            break
        }
    }
    return bool
}

var numbers = [1, 2, 3, 4, 5, 6]

console.log(some(numbers, function(number){
    return number === 3
}))