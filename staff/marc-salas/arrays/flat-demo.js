'use strict';

console.log("flat demo");

var arr = [1,2,[3,4]];
console.log("it", arr);

console.log("should return all the values on 1 array", flat(arr));

var arr = [1,2,[3,4,[5,6,[7,8]]]];
console.log("it", arr);

console.log("should return [1,2,3,4,5,6,[7,8]] the values on 1 array", flat(arr, 2));

var arr = [1,2,[3,4,[5,6,[7,8]]]];
console.log("it", arr);

console.log("should return all the values on 1 array", flat(arr, Infinity));