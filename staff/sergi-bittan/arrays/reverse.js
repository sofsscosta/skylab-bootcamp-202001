"use strict"

//a.reverse()


var arr = [1,2,3,4,5];

function reverse(arr)
{
    newArr = [];
    for (var i = arr.length-1; i>=0; i--)
    {
        newArr[newArr.length] = arr[i];
    }
    return newArr;
}