"use strict"

//arr.forEach(function callback(currentValue, index, array) {
    // tu iterador
//}[, thisArg]);



function forEach(array, expression) 
{
    var newArr = [];
    for (var i = 0; i < array.length; i++) 
    {
        newArr[newArr.length] = expression(array[i], i);
    }
    return newArr;
};


var result = [6,4,8,9,3,23];
var expresion = function(elem) {return elem + 20};
var result = forEach(result,expresion);
//console.log(result);