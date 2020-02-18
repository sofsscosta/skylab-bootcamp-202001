"use strict"

console.log("TEST Concat ");
var a = [1, 2, 5];
var b = ["Ana", "Pepe"];
var newConcat = concat(a, b);

console.assert(newConcat.length === a.lenght + b.length, "The sum of the two variables should be the same that the original one")
for