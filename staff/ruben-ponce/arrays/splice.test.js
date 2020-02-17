'use strict'
var a = [1, 2, 3, 4];

console.log("TEST splice(2, 0, 10, 13)");
var b =  splice(2, 0, 10, 13);
console.assert(b.length === a.length+2,'Result length should be 6');

console.log("#2 TEST splice(2, 0, 10, 13, 15, 17)");
var b = splice(2, 0, 10, 13, 15, 17);
console.assert(b.length === a.length+4,'Result length should be 8');

console.log("#3 TEST splice(2, 0, 'a')");
var b = splice(2, 0, "a");
console.assert(b.length === a.length+1,'Result length should be 5');