'use strict'


console.log('DEMO findindex');

const ages = [15, 48, 56, 72, 35, 45]

function checkAdult(age) {
    return age >= 15;
}

console.log(ages.findIndex(checkAdult))

console.log("It returns the index of the first element in the array that has a value of 15 or more")