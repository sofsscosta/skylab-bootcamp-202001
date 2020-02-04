'use strict';

console.log("push demo");

var arr = [1,2,3];
console.log("it", arr);
push(arr,3);
console.log("should add the value 3 at the end of the array", arr);

var arr = [1,2,3];
console.log("it", arr);
push(arr,'Marc');
console.log("should add the value 'Marc' at the end of the array", arr);

var arr = [1,2,3];
console.log("it", arr);
push(arr,3,'Marc');
console.log("should add the value 3 and 'Marc' at the end of the array", arr);