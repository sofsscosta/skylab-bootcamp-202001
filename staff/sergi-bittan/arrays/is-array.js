"use strict"

//Array.isArray(obj)
//instanceof me da el tipo. Le especifico que me de el tipo del constructor.El tipo de array es array 
//y el tipo del constructor Obj es obj





var arr = [2,4,6,7,8,9];

function isArray(obj)
{
    if (obj instanceof Array)
    {
        return true;
    }
}