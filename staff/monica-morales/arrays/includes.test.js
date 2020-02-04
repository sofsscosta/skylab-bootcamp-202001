'use strict';
console.log('TEST includes');

var numbers = [23,45,87,96];
var num = 96;
var letter ='a';

function includes(array, value){
    for(var i = 0; i<array.length; i++){
        if(value === array[i]){
            return true;
        }
    }
    return false;
};

var result1 = includes(numbers,num);
console.assert(result1 === true, 'Should true because num is in numbers');
console.log('Is true because num is in numbers');

console.assert(typeof result1 === 'boolean', 'Should be a boolean');
console.log('Is a boolean');

var result2 = includes(numbers,letter);
console.assert(result2 === false, "Should false because letter isn't in numbers");
console.log("Is false because letter isn't in numbers");


