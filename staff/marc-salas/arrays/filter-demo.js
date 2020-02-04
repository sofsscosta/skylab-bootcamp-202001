'use strict';

console.log("filer demo");
var a = [1,15,16,33,9, 0,"Marc","palabrota",true];

console.log("it", a);

function isBigEnough(value) {
    return value >= 10;
}
console.log("should show 15, 16, 33 of the array 'a' ", filter(a, isBigEnough));

function isLongEnough(value) {
    return value.length > 4;
}
console.log("should show palabrota of the array 'a' ", filter(a, isLongEnough));

function isTrue(value) {
    return value === true;
}
debugger
console.log("should show true of the array 'a' ", filter(a, isTrue));