'use strict';

console.log('DEMO Every');

var a = [1, 10, 20, 32, 15, 50, 40, 49];

function allSmallerThan(value) {
    return value < 51;
}

console.log('if all elements in an array are < than 50, included within', a);

console.log('it should return true, otherwise false... the result on this case is:', 
every(a, allSmallerThan));