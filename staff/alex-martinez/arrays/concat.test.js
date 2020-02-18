'use strict'
console.log('TEST concat');

//1
console.log('should return an array');
var arr1 = ['JS','AngularJs'];
var arr2 = ['NodeJs','MongoDb','ExpressJs'];
console.assert(concat(arr1,arr2) instanceof Array, 'should be return an array');

//2
console.log('should not change the existing arrays');

var arr1 = ['JS','AngularJs'];
var arr2 = ['NodeJs','MongoDb','ExpressJs'];
var temporal1 = arr1.map(ele=>ele);
var temporal2 = arr2.map(ele=>ele);

temporal1.forEach(function(element,index){
    
    console.assert(element === arr1[index],'should the same elements in array');
});
temporal2.forEach(function(element,index){
    
    console.assert(element === arr2[index],'should the same elements in array');
});

//3
console.log('should concat array and string / number / object');
//var arr = [1,2,3];

console.assert( concat(arr1,'noadsvbn').length === arr1.length + 1, 'should concat array and string');
