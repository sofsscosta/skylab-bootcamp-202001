'use strict';


function find(arr,expression){
    for(var i =0; i<arr.length; i++){
        if(expression(arr[i])){
            return arr[i];
        };
    };
    return undefined;
};