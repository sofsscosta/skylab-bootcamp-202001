"use strict"

var arr = [1,2,3,4,5];

function indexOf(arr,value,ind)
{
    var index = -1;
    for (var i = ind || 0; i<arr.length; i++)
    {
        if (arr[i] === value)
        {
            index = i;
        }
    }
    return index;
    
}