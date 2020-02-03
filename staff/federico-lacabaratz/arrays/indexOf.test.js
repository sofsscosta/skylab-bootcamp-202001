'use strict';

console.log('TEST IndexOf');

var array = [3, 4, 67, 75, 32];

var number = 4;

var results = indexOf(array, number);

console.log('Verifies the number exists within the array, it will show the index number. Otherwise returns -1');
console.assert(results !== -1, 'Verifies there is no coincidence between the provided number and the given array');





