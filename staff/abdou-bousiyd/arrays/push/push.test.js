console.log('test push');

var a = [1, 2, 3, 4, 5, 6];
var returnValue = push(a, 88)


console.log('should return length of the array');
console.assert(returnValue === 7, 'should return value be 7');

console.log('check last value');
console.assert(a[a.length -1] === 88, 'should return value be 88');
