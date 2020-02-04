'use strict'

console.log("TEST of---------------------------------------");
console.log('it creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.')

var resultA=of(1,2,3);
var arrayA=[1, 2, 3];
console.assert(resultA[0]===arrayA[0], 'it should be the same');
console.assert(resultA[1]===arrayA[1], 'it should be the same');
console.assert(resultA[2]===arrayA[2], 'it should be the same');
console.assert(resultA.length===3, 'this array should have 3 length, the number of elements');

var resultB=of('a','b','c');
var arrayB=['a','b','c'];
console.assert(resultB[0]===arrayB[0], 'it should be the same');
console.assert(resultB[1]===arrayB[1], 'it should be the same');
console.assert(resultB[2]===arrayB[2], 'it should be the same');
console.assert(resultB.length===3, 'this array should have 3 length, the number of elements');

var resultC=of({name:'Alex'}, {name:'Aurori'}, {name:'pepi'});
var arrayC=[{name:'Alex'}, {name:'Aurori'}, {name:'pepi'}];
console.assert(resultC[0].name===arrayC[0].name, 'it should be the same');
console.assert(resultC[1].name===arrayC[1].name, 'it should be the same');
console.assert(resultC[2].name===arrayC[2].name, 'it should be the same');
console.assert(resultC.length===3,'this array should have 3 length');