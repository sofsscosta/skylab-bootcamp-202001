"use strict"

console.log("DEMO filter");

var a = [0, 12, 4, -1];
console.log("it", a);
console.log('should result number more than 0');
console.log(filter(a, function(number) { return (number > 0) }));

var a = ["hi", 12, "v", 3];
console.log("it", a);
console.log('should result only strings');
console.log(filter(a, function(value) { return (typeof value === "string") }));

var a = ["victori", "Joe", "Bob"];
console.log("it", a);
console.log('should result only strings more than 3 characters');
console.log(filter(a, function(value) { return (value.length > 3) }));