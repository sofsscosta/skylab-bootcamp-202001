"use strict";

console.log("DEMO forEach");

var a = [1, 2, 3];
console.log("it", a);
forEach(a, function(value, index) { a[index] = value + 10 });
console.log('should array be modified adding 10 to each value', a);

var a = [1, 2, 3];
console.log("it", a);
forEach(a, function(value) { console.log(value + 10) });
console.log('should each value be added 10 and printed out');

var a = [1, 2, 3];
console.log("it", a);
forEach(a, function(value, index) { console.log(value + index) });
console.log('should each value be added the index and printed out');