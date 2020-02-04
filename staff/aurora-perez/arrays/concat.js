'use strict'
function concat (){
    if (!(arguments[0] instanceof Array)) {throw new TypeError(arguments[0] + ' is not an Array')};
    var result = [];
    for (var i = 0; i < arguments.length; i++) {
        var arr = arguments[i];
        for (var j = 0; j < arr.length; j++) {
            result[result.length] = arr[j];
        };
    };
    return result;
};