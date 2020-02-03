'use strict'

console.log('TEST findIndex')

var array = [5, 12, 8, 130, 44, 89];

function firstWithinArray(value) {
    return value > 13;
};

var results = findIndex(array, firstWithinArray)

console.log('Verifies the index number of the first number in the array > than 13');
console.assert(results === 3, 'It should show 3 as it is the index of 130');