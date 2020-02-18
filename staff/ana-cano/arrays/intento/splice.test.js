'use strict'

console.log('Slice TEST With the three  arguments')

var arrayOne = [1, 2, 3, 4, 5]
var startIndex = 1
var endIndex = 4

var newArray = slice(arrayOne, startIndex, endIndex)
console.assert(newArray.length === (endIndex - startIndex), 'should be the new array length euqal than rest of endIndex - startIndex')
for (var i = 0; i < newArray.length; i++) {
    console.assert(newArray[i] === arrayOne[i + startIndex], 'the new array should be start in the same position of startIndex')
}


var newArray = slice(arrayOne, startIndex)
console.assert(newArray.length === arrayOne.length - startIndex, 'the length of newArray should be equal to the length of original array less startIndex');