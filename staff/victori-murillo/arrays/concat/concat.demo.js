"use strict"

console.log("DEMO concat");

var a1 = [1, 2];
var a2 = [3, 4];
console.log("it", a1, a2);
console.log('should one array merged', concat(a1, a2));

var a1 = [1, 2];
var a2 = 3;
console.log("it", a1, a2);
console.log('should one array merged to a number', concat(a1, a2));

var a1 = [1, 2];
var a2 = [3, 4];
var a3 = [5, 6]
console.log("it", a1, a2, a3);
console.log('should one array merged to a number', concat(a1, a2, a3));