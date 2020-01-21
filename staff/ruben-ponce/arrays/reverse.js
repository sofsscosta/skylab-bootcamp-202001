'use strict'

var a = [1, 2, 3, 4];

function reverse(arr) {
    
    var c = [];

    for (var i = arr.length-1; i >= 0; i--){
        c[c.length] = arr[i];
    }
    return c;
}