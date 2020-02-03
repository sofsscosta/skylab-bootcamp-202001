"use strict"

function concat(array,array2)
{
    if (!(array instanceof Array)) throw new TypeError(array + " is not an array"); 
    var newArr = [];
    for (var i = 0; i<array.length; i++)
    {
        newArr[newArr.length] = array[i];
    }
    for (var j = 0; j<array2.length; j++)
    {
        newArr[newArr.length] = array2[j];
    }
    return newArr;
};

//concat(arr,arr2);

// // use strict';
// function concat(array, value) {
    
//     if (!(array instanceof Array)) throw new TypeError(array + ' is not an array');
//     var newArray = [];
//     if (typeof(array) != 'object') {
//         newArray[0] = array;
//     } else {
//         for (var i = 0; i<array.length; i++) {
//             newArray[i] = array[i];
//         };
//     };
//     if (typeof(value) != 'object') {
//         newArray[newArray.length] = value;
//     } else {
//         for (var i = 0; i<value.length; i++) {
//             newArray[newArray.length] = value[i];
//         };
//     };
//     return newArray;