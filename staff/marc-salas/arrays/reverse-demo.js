'use strict';

console.log("reverse demo");

var a = [1,2,3];
console.log("it", a);
console.log("should return 3, 2, 1", reverse(a));

var a = ['uno','dos','tres'];
console.log("it", a);
console.log("should return 'tres', 'don', 'uno'", reverse(a));

var a = [1,'dos', 3, 'cuatro', 5];
console.log("it", a);
console.log("should return 5, 'cuatro', 3, 'dos', 1", reverse(a));