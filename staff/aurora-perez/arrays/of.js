'use strict'

function of() {
    var result = [];
    for (var i = 0; i < arguments.length; i++) {
        result[result.length] = arguments[i];
    };

    return result;
};