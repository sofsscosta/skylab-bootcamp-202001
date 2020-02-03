"use strict"

console.log("DEMO pop");

var a = [1, 2, 3];
console.log("it", a);
console.log('should remove the last element and return it ==>', pop(a));
console.log(a);

var a = [1, 2, 3, ["hi"]];
console.log("it", a);
console.log('should remove the last element and return it ==>', pop(a));
console.log(a);

var a = ["js", "test", "ES5"];
console.log("it", a);
console.log('should remove the last element and return it ==>', pop(a));
console.log(a);