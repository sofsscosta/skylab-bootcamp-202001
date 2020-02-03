'use strict';

function splice(array, index, deleteCount, value) {
	
	var removed = [];
	
	for (var i = 1; i <= deleteCount; i++) {
		var temp = i - 1;
		removed[removed.length] = array[index + temp];
	}
	
	if (value) {
		array[index] = value;
		deleteCount -= 1;
		var newIndex = index + 1;
	}
	
	for (var j = newIndex || index; j < array.length; j++) {
		array[j] = array[j + deleteCount];
	}
	
	array.length = array.length - deleteCount;
	console.log(array);
	return removed;
}