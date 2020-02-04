'use strict'
console.log("DEMO map------------------------------------------------------")

var a = [1, 2, 3];
console.log("it should a new array with the applied function without modifying the original one: ",
map(a, function(value) {return value * 10}), a);

var b= ['a', 'b', 'c'];
console.log("it should a new array with the applied function without modifying the original one: ",
map(b, function(value) {return value += '-hello'}), b)

var c = ['Alex', 'Aurora', 'Pepito'];
console.log("it should a new array with the applied function without modifying the original one: ",
map(c, function(value) {return `Hello, ${value}!`}), c);