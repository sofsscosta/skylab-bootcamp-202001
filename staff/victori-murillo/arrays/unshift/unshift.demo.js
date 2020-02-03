"use strict";

console.log("DEMO unshift");

var a = [1, 2, 3];
console.log("it", a);
console.log("should add elements to the beginning and returns the new length", unshift(a, 4, 5))
console.log(a)

var a = ["a", "b", "c"];
console.log("it", a);
console.log("should add elements to the beginning and returns the new length", unshift(a, 4, 5))
console.log(a)

var a = [["abc"]];
console.log("it", a);
console.log("should add elements to the beginning and returns the new length", unshift(a, "add"))
console.log(a)