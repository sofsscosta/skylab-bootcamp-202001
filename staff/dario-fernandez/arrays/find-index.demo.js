'use strict'

console.log('DEMO findIndex()');

var demoArray = [1, 2, 3, 4, 5];
console.log('Given the following array ' + demoArray);
console.log('findIndex(demoArray, function (element) { return element >= 3}) shoud output 2 ==> ' + findIndex(demoArray, function (element) { return element >= 3 }));

var demoArray = [1, 2, 3, 4, 5];
console.log('Given the following array ' + demoArray);
console.log('findIndex(demoArray, function (element) { return element < 10 }) shoud output 0 ==> ' + findIndex(demoArray, function (element) { return element < 10 }));

var demoArray = [1, 2, 3, 4, 5];
console.log('Given the following array ' + demoArray);
console.log('findIndex(demoArray, function (element) { return element > 10 }) shoud output -1 (not found) ==> ' + findIndex(demoArray, function (element) { return element > 10 }));