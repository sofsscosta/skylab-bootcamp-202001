'use strict'

function copyWithin(array, targetIndex, indexToStart, indexToStop){
    indexToStop = indexToStop || array.length
    for(var i = indexToStart; i < indexToStop; i++) {
        array[targetIndex + (i - indexToStart)] = array[i]
    }
    return array
}

// -------TEST------

// var arrayTest = [1, 2, 3, 4, 5, 6]

// console.log('initial array ==> ' + arrayTest)
// console.log('Should print [4, 5, 3, 4, 5, 6] ==> ' + copyWithin(arrayTest, 0, 3, 5))
// console.log('Should print [4, 5, 6, 4, 5, 6] ==> ' + copyWithin(arrayTest, 0, 3))
// console.log('Should print [1, 2, 3, 1, 2, 3] ==> ' + copyWithin(arrayTest, 3, 0, 3))