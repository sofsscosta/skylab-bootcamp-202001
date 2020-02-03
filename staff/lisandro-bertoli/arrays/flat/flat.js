'use strict';

function flat(arr, deep, accumulator) {
	var result = accumulator || [];
	deep === undefined ? (deep = 1) : null;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] instanceof Array && deep > 0) {
			deep--;
			flat(arr[i], deep, result);
		} else {
			result[result.length] = arr[i];
		}
	}
	return result;
}
