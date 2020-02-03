'use strict';

function reduce(array, expression, initialValue) {
	if (!(array instanceof Array)) throw new TypeError(array + ' is not of type Array');
	if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function');
	var accumulator = initialValue || 0;
	for (var i = 0; i < array.length; i++) {
		accumulator = expression(accumulator, array[i], i);
	}
	return accumulator;
}
