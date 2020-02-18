'use strict';

var a = [1, 2, 3, 4, 5]

function reverse(array) {
    debugger;
    var temp = [];

    for (let index = 0; index < array.length; index++) {
        temp[index] = array[index];
    }

    for (var i = 0; i < array.length; i++) {
        array[(array.length - 1) - i] = temp[i];
    }

    return array
}

console.log(reverse(a))