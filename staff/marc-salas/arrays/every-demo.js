'use strict';

console.log("every demo");


var a = [19,15,16,33,99];
console.log("it", a);
function isBigEnough(value) {
    return value > 10;
}
console.log("should return true ", every(a, isBigEnough));

var a = [2, 15, "homer"];
console.log("it", a);
function isNumber(value) {
    return typeof value === 'number';
}
console.log("should return false ", every(a, isNumber));

var a = ["homer", "palabrota"];
console.log("it", a);
function isLong(value) {
    return value.length > 4;
}
debugger
console.log("should return true", every(a, isLong));