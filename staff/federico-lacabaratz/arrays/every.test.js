'use strict';

console.log('------------------------ TEST Every ------------------------');

var a = [1, 10, 20, 32, 15, 50, 40, 49];

function allSmallerThan(value) {
    return value < 51;
}

var result = every(a, allSmallerThan);

console.log('All elements in an array are < than 50, included within the array a');
console.assert(result === true, 'Check that not all values within a are < than 51');

console.log('it should return true, otherwise false... the result on this case is:', 
every(a, allSmallerThan));

console.log('All elements comply with the original condition (value < 51)')
var result2 = []

a.forEach(function(item) {
    result2.push(item < 51)
})

console.assert(result2[0] === true, 'a[0] does not complies with the condition (value < 51)');
console.assert(result2[1] === true, 'a[1] does not complies with the condition (value < 51)');
console.assert(result2[2] === true, 'a[2] does not complies with the condition (value < 51)');
console.assert(result2[3] === true, 'a[3] does not complies with the condition (value < 51)');
console.assert(result2[4] === true, 'a[4] does not complies with the condition (value < 51)');
console.assert(result2[5] === true, 'a[5] does not complies with the condition (value < 51)');
console.assert(result2[6] === true, 'a[6] does not complies with the condition (value < 51)');
console.assert(result2[7] === true, 'a[7] does not complies with the condition (value < 51)');

