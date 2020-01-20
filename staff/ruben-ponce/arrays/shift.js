'use strict'
var a = [1, 2, 3, 4];

function shift(a) {
    var b = [];
    for (var i = 1; i < a.length; i++) {
        b[i-1] = a[i];
    }
    return b;
}