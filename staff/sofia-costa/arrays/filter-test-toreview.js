console.log('TEST filter');

console.log('It should return an array after execution');

var list = ['broccoli', 3, 25, true, 'i-miss-soup']
var result = filter(list, function(element) {return isNaN(element)})
console.assert(result.length === 2, 'should the return array be 2');

var result = filter(list, function(element) {return typeof element === 'number'})
console.assert(result.length === 2, 'should the return array be 3');

var result = filter(list, function(element) {return typeof element === 'boolean'})
console.assert(result.length === 1, 'should the return array be 1');