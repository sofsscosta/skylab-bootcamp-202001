"use strict";

console.log("TEST find");

//1
var message = "should return a data primitive or object, not undefined";
console.log(message);
var array = [4, 5, 7];
var result = find(array, function(element) {return element > 4});
console.assert(result !== undefined, message);

//2
var message = "should return the first element => 7";
console.log(message);
var array = [4, 5, 7];
console.assert(find(array, function(element) {return element === 7}), message);

//3
var message = "should keep the same array length";
console.log(message);
var array = ["test", "js", "code"], temporal = [];
for (let i = 0; i < array.length; i++) {temporal[i] = array[i]};

find(array, function(element) {return element === "js"});
console.assert(array.length === temporal.length, message);