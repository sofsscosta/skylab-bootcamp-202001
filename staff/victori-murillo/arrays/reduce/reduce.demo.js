"use strict";

console.log("DEMO reduce");

var a = [1, 2, 3];
console.log("it", a);
console.log("should make the funct passed to reduce", reduce(a, function (a, c) {return a + c}));

var a = [1, 2, 3, 4];
console.log("it", a);
console.log("should make the funct passed to reduce", reduce(a, function (a, c) {return a + c}));

var a = [1, 3];
console.log("it", a);
console.log("should make the funct passed to reduce", reduce(a, function (a, c) {return a + c}, 20));