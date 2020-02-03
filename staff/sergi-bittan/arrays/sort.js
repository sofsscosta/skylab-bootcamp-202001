"use strict"
 //chartCode()
var arr = ["d","s","b","h","g"];

function sort(arr)
{
    var newArr = [];
    var newArr2 = [];
    for (var i = 0; i<arr.length;i++)
    {
        newArr[arr[i].charCodeAt(0) -97] = arr[i];
    }
    for (var j = 0;j<newArr.length; j++)
    {
        if (newArr[j] != undefined)
        {
            newArr2[newArr2.length] = newArr[j];
        }
    }
    return newArr2;
}

//sort(arr);
