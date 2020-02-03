console.log('DEMO every');

var array = [1, 2, 3, 4, 5];
console.log('it', array);
var allNumbers = every(array, function(element) {
	return typeof element === 'number';
});
console.log('should true be returned if all elements are numbers', allNumbers);

var array = [1, 2, 3, 4, 5];
console.log('it', array);
var allStrings = every(array, function(element) {
	return typeof element === 'string';
});
console.log(
	'should false be returned if not all elements are strings',
	allStrings
);

var array = [1, 2, 3, 4, 5];
console.log('it', array);
var allLow = every(array, function(element) {
	return element < 10;
});
console.log(
	'should true be returned if all elements are lower than 10',
	allLow
);
