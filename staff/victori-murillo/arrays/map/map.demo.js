"use strict"

console.log("DEMO map");

var a = [1, 2, 3];
console.log("it", a);
console.log('should return an array be modified adding 10 to each value');
console.log( map(a, function(value) { return (value + 10) }));

var a = [1, 2, 3];
console.log("it", a);
console.log('should return an array be modified multiply by 2');
console.log( map(a, function(value) { return (value * 2) }));

var a = [1, 2, 3];
console.log("it", a);
console.log('should return an array be modified multiply by the same value');
console.log( map(a, function(value) { return (value * value) }));