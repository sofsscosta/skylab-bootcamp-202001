"use strict";

console.log("DEMO every");

var a = [2, 4, 8];
console.log("it", a);
var msg = "should return true if every element is true => (num % 2 === 0)";
console.log(msg, every(a, function (num) {return num % 2 === 0}));

var a = [2, 4, 8];
console.log("it", a);
var msg = "should return true if every element is true => (num > 7)";
console.log(msg, every(a, function (num) {return num > 7}));

var a = ["hola", "hi", "hallo"];
console.log("it", a);
var msg = "should return true if every element is true => string.length >= 2";
console.log(msg, every(a, function (string) {return string.length >= 2 }));