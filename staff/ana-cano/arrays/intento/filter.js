'use strict';

var a = [15, 42, 13, 98, 75, 54]

function filter(array, expression) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {

        // value and index
        if (expression(array[i], i)) {

            newArray[newArray.length] = array[i]
        }
    }

    return newArray;
}

console.log(filter(a, function(ele, index) {
    return ele > 20
}))