'use strict'

console.log("DEMO fill--------------------------------");

var a = [1,2,3,4,5,6,7,8,9,10];
console.log('it changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.',
fill(a, 'a', 1, 4));

var b = [1,2,3,4,5,6,7,8,9,10];
console.log('it changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.',
fill(b, 'x', 3));

var c = [1,2,3,4,5,6,7,8,9,10];
console.log('it changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.',
fill(c, 'oso'));