'use strict';

function map(arr, expression){
    if (!(arr instanceof Array)) throw new TypeError(arr + ' is not an Array'); 
    if(expression===undefined) throw new TypeError ('It is necessary an expression');
    var newArray = [];
    for(var i = 0; i<arr.length; i++){
        newArray[newArray.length] = expression(arr[i]);
    }
    return newArray;
};

function expression(element){
    return element*2;
};

