"use strict"

function pop(array) {
    
    array =  array - array[array.length - 1];
    return array.length - 1;
}