"use strict"

//arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])

var arr = [2,5,8,4,6,8];

function reduce(arr,expresion)
{
    var acc;
    for (var i = 0;i<arr.length; i++)
    {
        acc[arr.length]= expresion(arr[i])
    }
}