'use strict';

console.log('------------------------ TEST Includes ------------------------');

var numbers = [32, 45, 2, 1, 56, 78];

var included = 78;

console.log('Verifies if the input number is included within the array');
var newArr = includes(numbers, included);

console.log('Verifies if there is no coincidence with the number looked up within the array')
for(var i=0; i<newArr.length; i++) {
    console.assert(newArr === true, 'the input number doesn\'t exist within the array');

}