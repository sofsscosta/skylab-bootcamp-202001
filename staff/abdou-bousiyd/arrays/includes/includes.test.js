console.log('test includes');

var a = [1, 2, 3, 4, 5, 6];
var returnValue = includes(a, 2)


console.log('should return true when element exist');
console.assert(returnValue === true, 'should return true');


var a = [1, 2, 3, 4, 5, 6];
var returnValue = includes(a, 22)

console.log('should return false when element does not exist');
console.assert(returnValue === false, 'should return false');

