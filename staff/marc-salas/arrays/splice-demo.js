'use strict';

console.log("splice demo");

var a = [1,2,3,4,5,6];
var result = [];
console.log("it", a, result);
result = splice(a, 1, 3);
console.log("should return the first array with 1,5,6 values and the second array with 2,3,4", a, result);

var a = [1,2,3,4,5,6];
var result = [];
console.log("it", a, result);
result = splice(a, 1, 3,10);
console.log("should return the first array with 1,10,5,6 values and the second array with 2,3,4", a, result);

var a = [1,2,3,4,5,6];
var result = [];
console.log("it", a, result);
result = splice(a, 1, 3,"homer");
console.log("should return the first array with 1,'homer',5,6 values and the second array with 2,3,4", a, result);




