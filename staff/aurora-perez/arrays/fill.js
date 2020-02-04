'use strict'

function fill (array, value, start, end) {
    if (!(array instanceof Array)) { throw TypeError (array + ' is not an array')}

    if(!start) {start = 0};
    if(start<0) {start = array.length+start};
    if (!end) {end = array.length};
    if (end<0) {end = array.length+end};
    
    do {
        array[start] = value;
        start++;
    } while (start !== end);

    return array;
};