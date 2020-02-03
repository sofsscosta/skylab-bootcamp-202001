console.log('DEMO flat');

var array = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
console.log('it', array);
var flatened = flat(array);
console.log(
	'new array should be returned with values of first inner array flattened',
	flatened
);

var array = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
console.log('it', array);
var flatened = flat(array, 2);
console.log(
	'new array should be returned with values of 2 first nested arrays flattened ',
	flatened
);

var array = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
console.log('it', array);
var flatened = flat(array, Infinity);
console.log(
	'new array should be returned with all inner arrays flattened into one',
	flatened
);
