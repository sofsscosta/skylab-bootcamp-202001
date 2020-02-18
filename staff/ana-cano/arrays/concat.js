'use strict'
var arrayOne = [1, 2, 5, 4];
var arrayTwo = [8, 4, 5, 2]

function concat(arguments) {
    if (!(arguments instanceof Array)) throw new TypeError(array + "is not an Array");
    var newArray = []
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {
            newArray[newArray.length] = arguments[i][j]
        }
    }
    return newArray
}