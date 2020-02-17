'use strict'
var a = [1, 2, 3, 4];

function push(a, param) {
    var b = a;
    b[a.length] = param;
    
    return b;
}