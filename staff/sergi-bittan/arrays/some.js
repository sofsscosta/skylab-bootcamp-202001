"use strict"
//arr.some(callback(element[, index[, array]])[, thisArg])
//true si la función callback devuelve un valor truthy para cualquier elemento del array; en caso contrario, false.


//var arr = [1,3,4,5,6,7,7];

function some(array,expression)
{
    if(!(expression instanceof Function)) throw new TypeError(expression + "is not a function");
    var boolean = false;
    for (var i = 0; i<array.length;i++)
    {
        if (expression(array[i]))
        {
            boolean = true;
            break;
        }
    }
    return boolean;
}

//console.log(some(arr,function(val){ return val > 7})
