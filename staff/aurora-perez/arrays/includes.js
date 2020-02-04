'use strict'

function includes (array, value, position){
    if (!(array instanceof Array)) {throw new TypeError(array + ' is not an array.')};
    if (typeof position === 'string' || typeof position === 'object' || typeof position === 'function') {
        for (var i = 0; i < array.length; i++) {
            if (value === array[i]) {
                return true;
            }
        }
    }
    var result;
    if (position >= 0){
        position < 0? position = array.length-(position*-1) : position = position;
        array[position]===value? result = true : result = false;
    } else {
        position = array.length;
        for (var i = 0; i < position; i++) {
            if (array[i] === value) {
                result = true; 
                i = array.length;
            }  else {
                result = false;
            };
        };
    };
    return result;
};