'use strict';
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

The map() method creates a new array populated with the results of calling a 
provided function on every element in the calling array.

- return value
A new array with each element being the result of the callback function.
*/

function map(array, callback) {
    var newArray = [];

    for (var x = 0; x < array.length; x++) {
        var value = array[x];
        var result = callback(value, x, array);
        newArray[newArray.length] = result;
    }

    return newArray;
}

console.log(map([1,2,3,4], function(value){
    return value * 2;
}))