"use strict"

//arr.findIndex(callback[, thisArg])


function findIndex(arr,expresion)
{
    for (var i = 0; i<arr.length; i++)
    {
        if (expresion(arr[i]))
        {
            return  i;
        }
    }
};

var result = [2,4,6,8,3,7,9,0,4];
var expresion = function(elem) {return elem < 4};
var result = findIndex(result,expresion);
//console.log(findIndex(arr,function(num){ return num > 3}));

