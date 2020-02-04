'use strict';
var array = [6,8,45,7,8];

console.log('TEST every');
console.log('should return true because all the elements in the array are smaller than 60');
var condition = function allSmallerThan(value){return value < 60};
var result = every(array, condition);
console.assert(result === true,'result should be true'); 

console.log('should return false because one  element bigger than 40');
var condition2 = function allSmallerThan(value){return value < 40};
var result2 = every(array, condition2)
console.assert(result2 === false, 'result should be false'); 



