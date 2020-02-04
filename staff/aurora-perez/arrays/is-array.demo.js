'use strict'

console.log("DEMO isArray---------------------------------------");

var a = [1, 2];
console.log('it determines whether the passed value is an Array, and returns true or false:', isArray(a));

var b = 'aa';
console.log('it determines whether the passed value is an Array, and returns true or false:', isArray(b));

var c = {a:"hola"};
console.log('it determines whether the passed value is an Array, and returns true or false:', isArray(c));