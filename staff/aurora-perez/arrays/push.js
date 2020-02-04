'use strict'
function push (array, value='') {
    if (!(array instanceof Array)) {throw new TypeError(array + ' is not an array.')};
    if(value === '') {return array.length};
    array[array.length] = value;
    return array.length;
};