"use strict"

function map(array,expression)
{
    var newArr = [];
    for (var i = 0; i<array.length;i++)
    {
        newArr[newArr.length] = expression(array[i]);
    }
    return newArr;
}

// var result = [1,3,5,6,7,5];
// var expresion = function(elem) {return elem + 10};
// var result = map(result,expresion);
// //console.log(map(arr, function(num){ return num +10}));

