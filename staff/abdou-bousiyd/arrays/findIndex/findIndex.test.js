console.log('test findIndex');

var a = ['z', 'b', 'g', 'y'];
var callback = element => element === 'b'
var returnValue = findIndex(a, callback)


console.log('should return the correct position of element');
console.assert(returnValue === 1, 'should return position 1');

var callback2 = element => element === 'p'
var returnValue2 = findIndex(a, callback2)

console.log('should return -1 when element does not exist');
console.assert(returnValue2 === -1, 'should return position -1');


