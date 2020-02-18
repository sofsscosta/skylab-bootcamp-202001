'use strict';

console.log('DEMO push');
var a = [1, 2, 3];
console.log('it', a);
a.push(4)
console.log('should have added 4 at the end', a);

var a = [1, 2, 3];
var b = [1, 2]
console.log('it', a);
a.push(b);
console.log('should have added an array at the end with [1,2]', a);

var a = [1, 2, 3];
var b = ["hello"]
console.log('it', a);
a.push(b)
console.log('should have added an string at the end', a);