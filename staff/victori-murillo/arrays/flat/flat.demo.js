"use strict";

console.log("DEMO flat");

var a = [1, 2, [3]];
console.log("it", a);
console.log('should concaten recursively 1 arrays inside in deep ==>', flat(a));

var a = [1, 2, [3, [4, [5]]]];
console.log("it", a);
console.log('should concaten recursively 3 arrays inside in deep ==>', flat(a, 3));

var a = [[1], 2, [3, [4, [5, [6]]]]];
console.log("it", a);
console.log('should concaten recursively 3 arrays inside in deep ==>', flat(a, 3));