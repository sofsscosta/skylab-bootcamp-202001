'use strict'

console.log('DEMO Find')

var numbers = [5, 12, 8, 130, 44, 89];

function firstWithinArray(value) {
    return value > 13;
};

console.log('For numbers > than 13, it should return the first number within', numbers, 'in this case:', find(numbers, firstWithinArray));