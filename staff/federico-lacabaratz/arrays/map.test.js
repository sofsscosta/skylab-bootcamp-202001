"use strict";

console.log('------------------------ TEST map ------------------------');

var arr = [1,3,5,6,7,9];

function mapeo(num){ 
    return num +10
};

var a = map(arr, mapeo);

console.log('Verifies that the array adds 10 to all numbers within the array')
for (var i=0; i<a.length; i++) {
    console.assert(a[i] === arr[i] + 10, 'this should give a result of each array item + 10, in this spcecific index, the result should be '+arr[i]+10);
};

console.log('Verifies that the array doesn\'t grow more than 6 positions');
console.assert(a.length === 6, "results length should equal 6");

console.log('Verifies each element of the array')
console.assert(a[0] === 11, "a[0] this should be 11"); 
console.assert(a[1] === 13, "a[1] this should be 13"); 
console.assert(a[2] === 15, "a[2] this should be 15"); 
console.assert(a[3] === 16, "a[3] this should be 16"); 
console.assert(a[4] === 17, "a[4] this should be 17"); 
console.assert(a[5] === 19, "a[5] this should be 19");


console.log('Verifies if something\'s passed in the function argument')
var _error= undefined;
try {
    map(arr)
} catch (error) {
    _error = error;
} finally {
    console.assert(_error instanceof TypeError, 'should the error be of TypeError');
    console.assert(_error.message === 'undefined is not a function', 'should fail with message "undefined is not a function"');
}

console.log('Verifies if what is passed within our function argument is not a function')
var _error= undefined;
try {
    map(arr, 1)
} catch (error) {
    _error = error;
} finally {
    console.assert(_error instanceof TypeError, 'should the error be of TypeError');
    console.assert(_error.message === '1 is not a function', 'should fail with message "1 is not a function"');
}

console.log('Verifies that the array is actually an Array')
var _error= undefined;
try {
    map(1, function(){})
} catch (error) {
    _error = error;
} finally {
    console.assert(_error instanceof TypeError, 'should the error be of TypeError');
    console.assert(_error.message === '1 is not an Array', 'should fail with message "1 is not an Array"');
}