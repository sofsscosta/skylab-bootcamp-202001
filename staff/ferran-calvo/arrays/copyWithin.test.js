'use strict';
var array=[1,2,3,4,5];
var result=copyWithin(array, 1,3,5)
console.log("TEST copyWithin");
console.assert(result === [1,4,5,4,5], "Should be [1,2,3,4,5]");
console.assert(result[0] === 1, "Index 0 should be 1");
console.assert(result[1] === 4, "Index 1 should be 4");
console.assert(result[2] === 5, "Index 2 should be 5");
console.assert(result[3] === 4, "Index 3 should be 4");
console.assert(result[4] === 5, "Index 4 should be 5");
console.log(result);