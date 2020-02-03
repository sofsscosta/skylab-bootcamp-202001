'use strict';

function filter(array, expression) {
	if (!(array instanceof Array)) throw new TypeError(array + ' is not of type Array');
	if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function');

	var result = [];

	for (var i = 0; i < array.length; i++) {
		if (expression(array[i])) {
			result[result.length] = array[i];
		}
	}
	return result;
}
