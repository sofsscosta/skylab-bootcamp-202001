'use strict';

function some(array,condition) {
    if(!(condition instanceof Function)) throw new TypeError(condition + ' is not a function');
    var boolean = false;
    
    for (var i = 0;i<array.length;i++) {
        if (condition(array[i])) {
            boolean = true;
            break;
        }
    }
    return boolean;
};