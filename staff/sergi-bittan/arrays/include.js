"use strict"
//Sintaxis  arr.includes(searchElement[, fromIndex]);
var result = [1,4,6,7,89,4];

function include(arr,value,fromIndex)
{
    var boolean = false;
    for (var i = fromIndex || 0; i< arr.length;i++)
    {
        if (value === arr[i])
        {
            boolean = true;
            return boolean;    
        }
    }            
};

//include(arr,7);












//arr.includes(searchElement[, fromIndex])
var result = [1,4,6,7,89,4];

function include(value,index)
{
    var boolean = false;
    for (var i = index || 0 ;i < result.length; i++)
    {
        if (result[i] === value)
        {
            boolean = true;
            return boolean;
        }
    }
};