'use strict'

console.log('TEST Find')

var array = [5, 12, 8, 130, 44, 89];

function firstWithinArray(value) {
    return value > 13;
};

console.log('For numbers > than 13, it should return the first number within the array');
var results = find(array, firstWithinArray);
console.assert(results === 130, 'This value should be 130, according to the actual array');

