'use strict'
console.log("DEMO filter-------------------------------------------------")

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("it should a new array with the applied function without modifying the original one: ",
filter(a, function(value) {return value > 5}), a);

var b = ['a','b','c','d','e'];
console.log("it should a new array with the applied function without modifying the original one: ",
filter(b, function(value) {return value > 'b'}), b);

var c = [10, 20, 30, 40, 50];
console.log("it should a new array with the applied function without modifying the original one: ",
filter(c, function(value) {return value -10}), c);