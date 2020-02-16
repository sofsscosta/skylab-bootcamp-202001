'use strict'

var array = ['js','nodejs','reactjs'];

function callback(element){
    return element;
}

console.log('findInxdex');

console.log(find(array,callback('nodejs')));