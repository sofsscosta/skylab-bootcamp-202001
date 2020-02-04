'use strict'
console.log('DEMO slice---------------------------');

var a = [1, 2, 3, 4, 5];
console.log('it should returns a shallow copy of a portion of an array into a new array from begin index to end index (end not included) without modified the original array.',slice(a, 1, 3))

var b = ['a', 'b', 'c', 'd', 'e'];
console.log('it should returns a shallow copy of a portion of an array into a new array from begin index to end index (end not included) without modified the original array.',slice(b, 2, 4))

var c = [1, 2, 3, 'a', 'b', 'c'];
console.log('it should returns a shallow copy of a portion of an array into a new array from begin index to end index (end not included) without modified the original array.',slice(c, 1))