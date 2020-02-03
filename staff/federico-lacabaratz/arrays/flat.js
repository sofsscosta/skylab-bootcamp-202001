'use strict';

function flat(array, depth, accumulator) {
	var result = accumulator || [];
	if(depth === undefined) {
        (depth = 1)
    } else {
        null;
    } 
	for (var i = 0; i < array.length; i++) {
		if (array[i] instanceof Array && depth > 0) {
			depth--;
			flat(array[i], depth, result);
		} else {
			result[result.length] = array[i];
		}
	}
	return result;
};