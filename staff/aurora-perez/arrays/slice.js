'use strict'

function slice (array, begin=0, end=array.length){
    if (!(array instanceof Array)) {throw new TypeError(array + ' is not an array.')};

    if (typeof begin === 'string' || typeof begin === 'function' || typeof begin === 'undefined') {begin = 0};

    if (begin < 0) {begin = array.length+begin};
    if (typeof end === 'undefined') {end=array.length};
    if (end < 0) {return end};
    
    var result=[];
    if (end < 0) {end = array.length + end};
    // if (end === undefined) {end = array.length};
    for (var i = begin; i < end; i++){
        result[result.length] = array[i];
    }
    return result;
};