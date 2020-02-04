'use strict'
console.log ('DEMO every--------------------------------------');


var a = [1, 2, 3]
console.log('it tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.',
every(a, function(value){return value<10;}));

var b = [10, 50, 100];
console.log('it tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.',
every(b, function(value){return value < 70;}));

var c = ['a', 'a','a','b','a'];
console.log('it tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.',
every(c, function(value){value === 'a';}));