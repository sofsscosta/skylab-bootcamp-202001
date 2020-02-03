'use strict';

function findIndex(arr, condition) {

for (var i=0; i<arr.length; i++) {

        if (condition(arr[i])) {
            return i;
        };
     
    };
    return -1;
};