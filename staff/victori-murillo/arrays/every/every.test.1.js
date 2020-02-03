"use strict";

console.log("TEST every");

//1
var message = "should return a boolean";
console.log(message);
var a = [2, 4, 8];
console.assert(typeof every(a, function (num) {return num % 2 === 0}) === "boolean", message);


//2
var message = "should keep the same element in the array";
console.log(message);
var a = [2, 4, 8];

var template = [];
// template = a.map(ele => ele); // refactor ES5
for(var i = 0; i < a.length; i++) { template[i] = a[i] }

every(a, function (num) {return num % 2 === 0})

template.forEach(function (element, index) {
  console.assert(element === a[index], message)
});


//3
var message = "should return true if every element is true => (num > 7)"
console.log(message)
var a = [9, 8, 10];
console.assert(every(a, function (num) {return num > 7}) === true, message);


//4
var message = "should return false if at least one element doesnt't pass the test implement";
console.log(message)
var a = ["hola", "hi", "hallo"];
console.assert(every(a, function (string) {return string.length > 3 }) === false, message);
