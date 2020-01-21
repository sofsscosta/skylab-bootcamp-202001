// 'use strict'
var a = [1, 2, 3, 4];
var b = [5, 6, 7, 8];

function concat(arr1, arr2) {
    
    for (var i = 0; i < arr1.length; i++) {
        a[a.length] = arr2[i];
    }
    return a;
}

//arguments.length-2