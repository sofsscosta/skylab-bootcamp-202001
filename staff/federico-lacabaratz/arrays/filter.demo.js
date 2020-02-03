'use strict';

console.log('DEMO Filter');

var a = [10, 13, 56, 34, 57, 22, 5, 72, 33, 1];

function isBiggerThan(value) {
    return value > 18;
};

console.log('It will show all numbers bigger than 18', filter(a, isBiggerThan)); 