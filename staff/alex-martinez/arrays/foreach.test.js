'use strict'

console.log('TEST forEach');
console.log('should array [1, 2, 3] be modified adding 10 to each value');
var array = [1,2,3];

foreach(array,function(value,index){
    array[index] === value + 10;
});
foreach(array,function(value, index) {
    console.assert(value === index + 1 + 10, 'should value at index ' + index + ' be ' + (index + 1 + 10));
});