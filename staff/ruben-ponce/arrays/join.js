'use strict'
var a = [1, 2, 3, 4];

function join(a, param) {
    var b = "";
    for (var i = 0; i < a.length; i++) {
        if (i < a.length-1) b += a[i] + ' ' + param + ' ';
        else b += a[i];
    }
    return b;
}