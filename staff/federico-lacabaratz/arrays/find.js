'use strict';

function find(arr, condition) {

var nex= 'element doesn not exist within the array';    

for (var i=0; i<arr.length; i++) {

        if (condition(arr[i])) {
            return arr[i];
        };
     
    };
    return nex;
};