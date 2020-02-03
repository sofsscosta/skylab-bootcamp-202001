'use strict';

function concat(array, values) {
	if (!(array instanceof Array)) throw new TypeError(array + ' is not an Array');
	var result = [];
	for (var i = 0; i < array.length; i++) {
		result[i] = array[i];
	}
	for (var i = 1; i < arguments.length; i++) {
		if (typeof arguments[i] === 'object') {
			for (var j = 0; j < arguments[i].length; j++) {
				result[result.length] = arguments[i][j];
			}
		} else {
			result[result.length] = arguments[i];
		}
	}
	return result;
}
