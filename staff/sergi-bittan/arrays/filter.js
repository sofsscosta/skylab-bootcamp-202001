"use strict"

//var newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])

function filter(array,expression) 
{
    if(!(array instanceof Array)) throw new TypeError(array + " is not an Array");
    if(typeof expression !== "function") throw new TypeError(expression + " is not a function");
    var newArr = [];
    for (var i = 0; i<array.length; i++)
    {
        if (expression(array[i]))
        {
            newArr[newArr.length] = array[i];
        }
    }
    return newArr;
};

