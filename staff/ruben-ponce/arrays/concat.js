// 'use strict'
var a = [1, 2, 3, 4];
var b = [5, 6, 7, 8];

function concat(arr1, arr2) {
    var c = [];
    for (var i = 0; i < arr1.length; i++) {
        c[i] = arr1[i];
    }
    for (var j = 0; j < arr2.length; j++) {
        c[i+j] = arr2[j];
    }
    return c
}

//arguments.length-2