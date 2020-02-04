'use strict';

var numbers = [23,45,87,96];


function includes(array, value){
    for(var i = 0; i<array.length; i++){
        if(value === array[i]){
            return true;
        }
    }
    return false;
};

