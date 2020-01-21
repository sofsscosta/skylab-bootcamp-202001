'use strict'

function pop(a) {
    var b = [];
    for (var i = 0; i < a.length-1; i++) {
        b[i] = a[i];
    }
    return b;
}