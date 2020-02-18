'use strict'


console.log('DEMO find');

const ages = [15, 48, 56, 72, 35, 45]

function checkAdult(age) {
    return age >= 15;
}

console.log(ages.find(checkAdult))

console.log("It returns the first element in the array that has a value of 15 or more")