"use strict"

console.log("DEMO push");

var a = [1, 2, 3];
console.log("it", a);
console.log('should array be modified adding the arguments("hi", 5) to the end', push(a, "hi", 5));

var a = [1, 2, 3];
console.log("it", a);
console.log('should array be modified adding the arguments(4, 5, 6) to the end', push(a, 4, 5, 6));

var a = [1, 2, 3];
console.log("it", a);
console.log('should array be modified adding the arguments([], {}, 6, 7) to the end', push(a, [], {}, 6, 7));