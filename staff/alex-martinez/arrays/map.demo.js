'use strict'
var array = [1,2,3,4];
console.log('map')
console.log(map(array,function(arr){
    return array + 1;
}));