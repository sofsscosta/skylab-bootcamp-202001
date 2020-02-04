'use strict';

var a1 = [1,2,3];
var a2 = [4,5,6];
var array = concat(a1,a2);
//console.log('TEST concat');
console.log('result: ', array);
console.assert(array.length === a1.length+a2.length,'should array length be 6');
console.log('should value at index 0 be 1');
console.assert(array[0] === 1, 'should value at index 0 be 1');
console.log('should value at index 1 be 2');
console.assert(array[1] === 2, 'should value at index 1 be 2');
console.log('should value at index 2 be 3');
console.assert(array[2] === 3, 'should value at index 2 be 3');
console.log('should value at index 3 be 4');
console.assert(array[3] === 4, 'should value at index 3 be 4');
console.log('should value at index 4 be 5');
console.assert(array[4] === 5, 'should value at index 4 be 5');
console.log('should value at index 5 be 6');
console.assert(array[5] === 6, 'should value at index 5 be 6');

    
