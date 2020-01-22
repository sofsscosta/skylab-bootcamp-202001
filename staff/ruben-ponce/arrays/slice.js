'use strict'
var a = [1, 2, 3, 4, 5, 6];

function slice(arr, index, fIndex = arr.length) {
    var b = [];

    for (var i = index; i < fIndex; i++) {
        b[b.length] = arr[i];
    }
    debugger
    return b;
}


