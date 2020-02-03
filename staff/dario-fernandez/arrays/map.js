'use strict'
function map(array, expresion){
    var newArray = []
    for(var i = 0; i < array.length; i++) {
        newArray[newArray.length] = expresion(array[i])
    }
    return newArray
}

var numbers = [1, 2, 3, 4, 5, 6]
console.log(map(numbers, function(number) {
    return number + 10
}))