'use strict'

console.log('findIndex() TEST');

var testArray = [1, 2, 3, 4, 5];

console.assert(findIndex(testArray, function (element) { return element >= 3}) === 2, 'Given the following array testArray = [' + testArray + '] findIndex(testArray, function (element) { return element >= 3}) shoud output 2');

console.assert(findIndex(testArray, function (element) { return element < 10}) === 0, 'Given the following array testArray = [' + testArray + '] findIndex(testArray, function (element) { return element < 10}) shoud output 0');

console.assert(findIndex(testArray, function (element) { return element > 10}) === -1, 'Given the following array testArray = [' + testArray + '] findIndex(testArray, function (element) { return element > 10}) shoud output -1');
