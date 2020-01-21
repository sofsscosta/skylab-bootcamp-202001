'use strict'

var a = [1, 2, 3, 4];
var b = [5, 6, 7, 8];

function concat(arr1, arr2) {
    
    for (var i = 0; i < arr2.length; i++) {
        arr1[arr1.length] = arr2[i];
    }
    return arr1;
}

concat(a,b);