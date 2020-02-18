'use strict';

function filter(array, condition) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an Array');

    var filtered = [];

    for (var i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            filtered[filtered.length] = array[i];
        }
    }

    return filtered;
}