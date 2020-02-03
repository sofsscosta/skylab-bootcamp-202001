'use strict'

function includes(array, value) {
    var bool = false
    for(var i = 0; i < array.length; i++) {
        if(value === array[i]){
            bool = true
            break
        }
    }
    return bool
}

var numbers = [1, 2, 3, 4, 5, 6]

console.log(includes(numbers, 3))