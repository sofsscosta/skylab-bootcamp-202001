'use strict';

function map(arr, condition) {
    if (!(arr instanceof Array)) throw new TypeError(arr + ' is not an Array');    
    if (typeof condition !== 'function') throw new TypeError(condition + ' is not a function');        

    var arr2= [];

    for (var i=0; i<arr.length; i++) {    
        arr2[arr2.length] = condition(arr[i])
    }
    return arr2;
}