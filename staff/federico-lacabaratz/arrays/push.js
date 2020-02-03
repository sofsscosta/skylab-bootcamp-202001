'use strict';

function push(array, value) {
    if(!(array instanceof Array)) throw new TypeError(array+' is not an array');
    if(!(value)) throw new TypeError('There is no value tu push');
    array[array.length] = value;

    return array.length;
};