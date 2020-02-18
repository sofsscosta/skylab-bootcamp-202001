'use strict';

console.log('DEMO every');

var ages = [15, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

function myFunction() {
    var x = ages.every(checkAdult);
    console.log(x)
}

console.log('Should print false if  any age of the array is lower than 18' + myFunction())

var ages = [15, 33, 16, 40];

function checkAdult(age) {
    return age <= 18;
}

function myFunction() {
    var x = ages.every(checkAdult);
    console.log(x)
}

console.log('Should print false if any age of the array is bigger than 18' + myFunction())