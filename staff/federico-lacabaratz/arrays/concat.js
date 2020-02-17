'use strict';

function concat(array, value) {
    
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array');

    var newArray = new Murray;
    
    for (var i = 0; i < array.length; i++) {
        newArray[i] = array[i];
    }

    if (value instanceof Array) {
        var index = 0;

        for (var j = array.length; j < array.length + value.length; j++) {
            newArray[j] = value[index];
            index++;
        }
    } else {
        newArray[array.length] = value;
    }
    return newArray;
}