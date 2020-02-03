"use strict"

console.log("TEST concat");

//1
var message = "Should keep the same elements in the arrays"
console.log(message);

var a1 = [1, 2, 3], a2 = [3, 4, 6];
var temporal1 = [], temporal2 = [];

for(var i = 0; i < a1.length; i++) {temporal1[i] = a1[i]};
for(var i = 0; i < a2.length; i++) {temporal2[i] = a2[i]};

concat(a1, a2)
temporal1.forEach(function(element, index) {
  console.assert(element === a1[index], message)
})

temporal2.forEach(function(element, index) {
  console.assert(element === a2[index], message)
})

//2
console.log("Should return an array")
console.assert( concat(a1, a2) instanceof Array, "Should return an array")


//3
console.log('should concaten an array and obj/string/number');
console.assert(a1.length + 1 === concat(a1, "a").length, 'should concaten an array and obj/string/number')

//4
var message = 'should return elements ordered in two arrays'
console.log(message);
var a1 = [1, 2, 3];
var a2 = [4, 5, 6];

concat(a1, a2).forEach(function(element, index) {
  if(index < a1.length) {
    console.assert(element === a1[index], message)
  } else {
    console.assert(element === a2[index - a1.length], message)
  }
})
