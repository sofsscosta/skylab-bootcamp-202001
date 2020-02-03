'use strict';

function reduce(array, condition, initialValue) {
	var accumulator = initialValue || 0;
	for (var i = 0; i < array.length; i++) {
		accumulator += condition(accumulator, array[i], i);
	}
	return accumulator;
}