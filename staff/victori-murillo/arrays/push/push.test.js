"use strict"

console.log("TEST push");

console.log('should length of Array be 6');
var a = [1, 2, 3];
push(a, 4, 5, 6);
console.assert( (6 === a.length, "should array the length of " + a.length));


console.log('should the last value in the array be 9');
var a = [1, 2, 3];
push(a, 9);
console.assert( a[a.length - 1] === 9, "should last value in the array be " + a.length)


console.log('should the intital elements be the same')
var a = [1, 2, 3, 4];
var temp = a.map(ele => ele)
push(a, 7)
temp.forEach(function(element, index) {
  console.assert(element === a[index], "should be the same initial values in the array")
})