'use strict'

console.log('DEMO fill()');

var demoArray = [1, 2, 3, 4, 5];
console.log('Given the following array ' + demoArray);
console.log('fill(demoArray, \'a\') shoud output [a, a, a, a, a] ==> ' + fill(demoArray, 'a'));

var demoArray = [1, 2, 3, 4, 5];
console.log('Given the following array ' + demoArray);
console.log('fill(demoArray, 3, 2) shoud output [1, 2, 3, 3, 3] ==> ' + fill(demoArray, 3, 2));

var demoArray = [1, 2, 3, 4, 5];
console.log('Given the following array ' + demoArray);
console.log('fill(testArray, \'a\', 1, 4) shoud output [1, a, a, a, 5] ==> ' + fill(testArray, 'a', 1, 4));