"use strict"

//arr.every(callback[, thisArg])

function every(arr,expresion)
{
    var boolean = true;
    for (var i = 0; i<arr.length;i++)
    {
        if (!expresion(arr[i]))
        {
            boolean = false;
            break;
        }
    }
    return boolean;
};

// var result = [1,3,4,5,6,7,7];
// var expresion = function(val){ return val > 3};
// var result = every(result,expresion);
//console.log(result);