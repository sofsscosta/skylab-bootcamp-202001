'use strict';

/*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin

The copyWithin() method shallow copies part of an array 
to another location in the same array and returns it without modifying its length.

- return value
    The modified array.
*/

function copyWithin(array, index, start, end) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array. ' + (typeof array) + ' given');
    if (typeof index !== 'undefined' && typeof index !== 'number') throw new TypeError(index + ' is not a number. ' + (typeof index) + ' given');
    if (typeof start !== 'undefined' && typeof start !== 'number') throw new TypeError(start + ' is not a number. ' + (typeof start) + ' given');
    if (typeof end !== 'undefined' && typeof end !== 'number') throw new TypeError(end + ' is not a number. ' + (typeof end) + ' given');

    var rangeValues = [];
    start = typeof start === 'undefined' ? 0 : start;
    end = typeof end === 'undefined' ? array.length : end;
    index = typeof index === 'undefined' ? 0 : index;

    if(end > array.length) end = array.length
    if(end < start) end = start;

    for(var x = start; x < end; x++){
        rangeValues[rangeValues.length] = array[x];
    }

    for(var x = 0; x < rangeValues.length; x++) {
        array[index] = rangeValues[x];
        index++;
    }

    return array;
}

var arrayTest = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(copyWithin(arrayTest, 4, 5, 9));