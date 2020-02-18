console.log('fill() TEST')

// 2 arguments

console.log('Should the array be filled with 9\'s not changhing the length')

var arrayTest1 = [1, 2, 3, 4, 5]
var valueTest1 = 9
var lengthBefore = arrayTest1.length
fill(arrayTest1, valueTest1)

for (var i = 0; i < arrayTest1.length; i++) {
    console.assert(arrayTest1[i] === valueTest1, 'All values in the array should be 9')
}

console.assert(arrayTest1.length === lengthBefore, 'Array\'s length should be equal before and after the function runs')
    // 3 arguments
console.log('the array should be filled whith 5 starting from the second Index until the end')

var arrayTest2 = [2, 4, 6, 8, 9]
var valueTest2 = 5
var lengthBefore2 = arrayTest2.length
var startIndex = 2
var auxArrayTest2 = [2, 4, 6, 8, 9]

fill(arrayTest2, valueTest2, startIndex)
for (var j = startIndex; j < arrayTest1.length; j++) {
    console.assert(arrayTest2[j] === valueTest2, 'should be the same number from the start Index to the end')
}

for (var z = startIndex - 1; z >= 0; z--) {
    console.assert(arrayTest2[z] === auxArrayTest2[z], 'the value of these elements should be the same ')
}

console.assert(auxArrayTest2.length === arrayTest2.length, 'the array\'s length should be the same')

// 4 arguments
console.log('the array should be filled whith 5 starting from the first Index until the 3 index')

var arrayTest3 = [2, 4, 6, 8, 9]
var valueTest3 = 5
var lengthBefore3 = arrayTest3.length
var startIndex2 = 1
var stopIndex = 4
var auxArrayTest3 = [2, 4, 6, 8, 9]

fill(arrayTest3, valueTest3, startIndex2, stopIndex)
for (var k = startIndex; k < stopIndex - 1; k++) {
    console.assert(arrayTest3[k] === valueTest3, 'should be the same number from the start Index until the stop')
}

for (var n = startIndex2 - 1; n >= 0; n--) {
    console.assert(arrayTest3[n] === auxArrayTest3[n], 'the value of these elements should be the same ')
}

for (var m = stopIndex; m < arrayTest3.length; m++) {
    console.assert(auxArrayTest3[m] === arrayTest3[m], "The value of these elements starting from stopIndex should be the same")
}

console.assert(auxArrayTest3.length === arrayTest3.length, 'the array\'s length should be the same')