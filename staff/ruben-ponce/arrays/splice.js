// 'use strict'
var a = [1, 2, 3, 4];

function splice() {
    var b = [];
    var count = 0;
    var step = 0
    // debugger
    for (var i = 0; i < a.length+arguments.length-2; i++) {
        
        if (i === arguments[0]) { 
            for (var j = 0; j < arguments.length-2; j++) {
                b[i+j] = arguments[j+2];
                count++
            }
            step--;
        }
        else if (i < a.length + 1) {
            b[count] = a[i+step];
            count++
        }
    }
    return b;
}

//arguments.length-2