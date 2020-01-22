'use strict';

/*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

The concat() method is used to merge two or more arrays. 
This method does not change the existing arrays, but instead returns a new array.

- return value
    A new Array instance.
*/

function concat(array) {
    var args = arguments;

    for(var x = 1; x < args.length; x++) {
        var item = args[x];
        for(var y = 0; y < item.length; y++){
            array[array.length] = item[y];
        }
    }

    return array;
}

console.log(concat([1,2,3,4], [5,6,7,8], [9,10,11,12]))