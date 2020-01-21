'use strict'
var a = [1, 2, 3, 4];
var c = [];

function reverse(arr) {
    for (var i = arr.length-1; i >= 0; i--){
        c[c.length] = arr[i];
    }
    return c;
}