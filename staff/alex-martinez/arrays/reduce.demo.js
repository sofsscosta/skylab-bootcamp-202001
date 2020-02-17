'use strict'

var nums = [0,1,2,3,4];

console.log('Reduce');

console.log(reduce(nums,function(a,b){
    return a + b;
}));