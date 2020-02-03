'use strict';

function splice(arr, index, count, value) {
	var removed = [];
	for (var i = 1; i <= count; i++) {
		var temp = i - 1;
		removed[removed.length] = arr[index + temp];
	}
	if (value) {
		arr[index] = value;
		count -= 1;
		var newIndex = index + 1;
	}
	for (var j = newIndex || index; j < arr.length; j++) {
		arr[j] = arr[j + count];
	}
	arr.length = arr.length - count;
	console.log(arr);
	return removed;
}
