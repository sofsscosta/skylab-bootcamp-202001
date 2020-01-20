'use strict'
var a = [1, 2, 3, 4];

function unshift(param) {
    var b = [param];

    for (var i = 0; i < a.length; i++) {
        b[i+1] = a[i];
    }
    return b;
}