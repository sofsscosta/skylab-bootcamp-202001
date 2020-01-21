console.log('test foreach');

var a = [1, 2, 3, 4, 5, 6];
var result = []
var returnValue = forEach(a, function(element, index){
    result[index] = element + 1;
} )


console.log('should the return value of foreach be undefined');
console.assert(returnValue === undefined, 'should return value be undefined');

console.log('should 1 be added to every value in the array');
result.forEach(function(ele, index){
    console.assert(ele === a[index] +1, 'should value at index ' + index + 'be ' + (a[index] + 1));
})