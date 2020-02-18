'use strict';
console.log("TEST map");
console.log("It creates a new array, using the original, using a callback function");

var num = [1, 4, 2, 9];

var newArray = map(num, expression)
var results = [2, 8, 4, 18]

function expression(element) {
    return element * 2

}

console.assert(num.length === newArray.length, "The length of the num Array and the newArray should be equal")

for (var i = 0; i < newArray.length; i++) {
    console.assert(newArray[i] === results[i], "The element of the original array should be equal than the new one")
}