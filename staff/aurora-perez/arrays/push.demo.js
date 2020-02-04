'use strict'
console.log("DEMO push---------------------------");
var a = [1, 2, 3];
push(a, 4);
console.log("it should return the array's length with the new added value", a);
var b = ['a', 'b', 'c'];
push(b, 'd');
console.log("it should return the array's length with the new added value", b);
var c = [];
push(c);
console.log("it should return 1 and the array should have an undefined value", c);