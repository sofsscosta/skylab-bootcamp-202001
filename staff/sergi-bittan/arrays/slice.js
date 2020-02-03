"use strict"

//arr.slice([inicio [, fin]])

var arr = [2,5,4,7,8,3];

//pruebo de poner la condicion por defecto en el parametro
//para hacerlo de otra manera.

function slice(arr,index,fIndex = arr.length)
{   
    //var x; metodo más tradicional.
    //fIndex ? x = arr.length - fIndex : x = arr.length;
    newArr = [];
    for (var i = index; i < fIndex ; i++)
    {
        newArr[newArr.length] = arr[i];
    }
    return newArr;
}

//console.log(slice(arr,index,fIndex))