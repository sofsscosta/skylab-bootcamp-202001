"use strict";

console.log("DEMO indexOf");

var a = [2, 2, 4];
console.log("it", a);
console.log("should return the index of the first element found ==>", indexOf(a, 4));

var a = [2, 2, 4, "code"];
console.log("it", a);
console.log("should return the index of the first element found ==>", indexOf(a, "code"));

var a = [2, 2, 4, "code", "test"];
console.log("it", a);
console.log("should return the index of the first element found ==>", indexOf(a, "test"));