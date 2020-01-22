'use strict';

console.log('REDUCE test');

var items = [1,2,3,4,5];
var initialValue = 0;
var previousValues = [];

var result = reduce(items, function(previousValue, currentValue, index){
    var sum = previousValue + currentValue;
    previousValues.push(sum)
    return sum;
}, initialValue);

previousValues.forEach(function(previousValue, index) {
    if(index === 0){
        var expectedValue = items[index];
        console.assert(previousValue === (initialValue + expectedValue), 'should previousValue be ' + expectedValue + ' but got ' + previousValue)
    }else if(index === 1){
        var expectedValue = items[0] + items[index];
        console.assert(previousValue === (initialValue + expectedValue), 'should previousValue be ' + expectedValue + ' but got ' + previousValue)
    }else if(index === 2){
        var expectedValue = items[0] + items[1] + items[index];
        console.assert(previousValue === (initialValue + expectedValue), 'should previousValue be ' + expectedValue + ' but got ' + previousValue)
    }else if(index === 3){
        var expectedValue = items[0] + items[1] + items[2] + items[index];
        console.assert(previousValue === (initialValue + expectedValue), 'should previousValue be ' + expectedValue + ' but got ' + previousValue)
    }else if(index === 4){
        var expectedValue = items[0] + items[1] + items[2] + items[3] + items[index];
        console.assert(previousValue === (initialValue + expectedValue), 'should previousValue be ' + expectedValue + ' but got ' + previousValue)
    }else if(index === 5){
        var expectedValue = items[0] + items[1] + items[2] + items[3] + items[4] + items[index] + 1;
        console.assert(previousValue === (initialValue + expectedValue), 'should previousValue be ' + expectedValue + ' but got ' + previousValue)
    }
})

console.assert(result === 15, 'should result be 15 but got ' + result + ' instead')