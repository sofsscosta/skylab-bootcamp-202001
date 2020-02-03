'use strict';

console.log('------------------------ TEST From ------------------------');

var arr = [2, 3, 5, 78, 57, 32]


console.log('it should replicate the same array:');
var newArr = from(arr);

console.log('Verify the same array replicates');
for(var i=0; i<newArr.length; i++) {
    console.assert(newArr[i] === arr[i], 'this element doesn\'t match with the element in the original array, it should equal:'+arr[i]);
};

