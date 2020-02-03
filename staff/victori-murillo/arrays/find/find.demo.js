"use strict";

console.log("DEMO find");

var a = [4, 5, 7];
console.log('it', a);
console.log('should return the first element with the condition true')
console.log(find(a, function(element) {return element > 4}))

var a = [4, 5, 7];
console.log('it', a);
console.log('should return the first element with the condition true')
console.log(find(a, function(element) {return element === 7}))

var a = ["test", "js", "code"];
console.log('it', a);
console.log('should return the first element with the condition true')
console.log(find(a, function(element) {return element === "js"}))