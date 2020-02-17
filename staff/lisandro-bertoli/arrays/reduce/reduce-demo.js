console.log('DEMO reduce');

var arr = [0, 1, 2, 3, 4];
console.log('it', arr);
var reduced = reduce(arr, function(accumulator, currentVal) {
	return accumulator + currentVal;
});
console.log(
	'should new value be returned from the sum of all ellements in the array: 10',
	reduced
);

var arr = [0, 1, 2, 3, 4];
console.log('it', arr);
var reduced = reduce(
	arr,
	function(accumulator, currentVal) {
		return accumulator + currentVal;
	},
	10
);
console.log(
	'should new value be returned from the sum of all ellements in the array + initial value provided. Result: 20',
	reduced
);

var arr = [0, 1, 2, 3, 4];
console.log('it', arr);
var reduced = reduce(
	arr,
	function(accumulator, currentVal) {
		if (accumulator < 20) {
			return accumulator + currentVal;
		} else return accumulator;
	},
	14
);
console.log(
	'should the sum of array elements be returned while the sum is lower than 20. Result: 20',
	reduced
);
