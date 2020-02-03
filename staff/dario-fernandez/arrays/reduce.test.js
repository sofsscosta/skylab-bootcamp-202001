'use strict'

console.log('reduce() TEST')

var testArray = [1, 2, 3, 4]
var controlArray = [1, 2, 3, 4]

console.assert(reduce(testArray, function (acc, curValue){return acc + curValue}) === 10, 'Given this array testArray = [1, 2, 3, 4] reduce(testArray, function (acc, curValue) {return acc + curValue} should return 10')
console.assert(typeof reduce(testArray, function (acc, curValue) {return acc + curValue}) === 'number', 'The function should return a number')
for(var i = 0; i < testArray.length; i++) {
    console.assert(testArray[i] === controlArray[i], 'The original array should not be altered')
}