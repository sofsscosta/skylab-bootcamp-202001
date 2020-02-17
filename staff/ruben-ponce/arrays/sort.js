'use strict'
var a = ['a', 'c', 'b', 'h'];
var b = [];
var c = [];
var count = 0;

function sort(arr) {
    
    for (var i = 0; i < arr.length; i++) {
        b[arr[i].charCodeAt(0)-97]=arr[i];
    }
    for (var j = 0; j < b.length; j++) {
        if (b[j] != undefined) {
            c[c.length] = b[count];
        }
        count++;
    }
    return c;
}