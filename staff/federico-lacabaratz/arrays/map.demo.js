'use strict';

console.log('DEMO Map');

var numbers = [1, 5, 10, 15, 32, 7];

function operation(value) {
    return value * 2;
};

console.log('Each element in my array', numbers, 'will be in this case multiplied by 2, obtaining a new arrar:', map(numbers, operation));
