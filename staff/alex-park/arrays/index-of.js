'use strict'

function indexOf(array, value, position) {
    if (!(array instanceof Array)) {throw new TypeError(array + ' is not an array.')};
    if (typeof position === 'string' || typeof position === 'object' || typeof position === 'function') {
        for (var i = 0; i < array.length; i++) {
            if (value === array[i]) {
                return i;
            }
        }
    }

    var result = -1;

    if (position < 0){position = array.length + position};
    if (position===undefined){position = 0};
    for (position; position < array.length; position++) {
        if (value === array[position]) {
            result = position;
            position = array.length;
        };
    };
    return result;
};