"use strict"
var a = [4, 5, 6, 7];

function shift(array) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not array');

    var newArray = [];
    var shifted = array[0];
    for (var i = 1; i < array.length; i++) {
        newArray[newArray.length] = array[i];

    }
    array = newArray;

    return shifted;
}