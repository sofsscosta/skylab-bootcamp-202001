'use strict'
var a = ['a', 'c', 'b', 'h'];

console.log("TEST sort(a)");
var b = sort(a);

console.assert(b.length === 4, 'Array length should be 4');
console.assert(b[0],'This element should be a');
console.assert(b[1],'This element should be b');
console.assert(b[2],'This element should be c');
console.assert(b[3],'This element should be d')