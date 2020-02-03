'use strict';

console.log('DEMO forEach');

var array = [1, 2, 3];
console.log('it', array);
forEach(array, function(value, index) { array[index] = value + 10 });
console.log('should array be modified adding 10 to each value', array);

var array = [1, 2, 3];
console.log('it', array);
forEach(array, function(value) { console.log(value + 10) });
console.log('should each value be added 10 and printed out');

var array = [1, 2, 3];
console.log('it', array);
forEach(array, function(value, index) { console.log(value + index) });
console.log('should each value be added the index and printed out');
