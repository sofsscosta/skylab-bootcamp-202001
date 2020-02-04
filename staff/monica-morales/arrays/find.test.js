'use strict';

console.log('TEST find');
var numbers = [15,90,23,12];
var numbers2 =[4,8,3,1];

function find(arr,expression){
    for(var i =0; i<arr.length; i++){
        if(expression(arr[i])){
            return arr[i];
        };
    };
    return undefined;
};
//funcion callback 1
function num(value){
    if(value > 60){
        return value;
    }
};

//funcion callback 
function num2(value){
    if(value > 80){
        return value;
    }
};
var result = find(numbers,num);
console.assert(typeof result != "boolean','The result isn't booelan");
console.log('The result never is a boolean');

var result =find(numbers2, num2);
console.assert(result === undefined,"If neverI don't find result show UNDEFINED");
console.log("The result is undefined because don't find coincidences");