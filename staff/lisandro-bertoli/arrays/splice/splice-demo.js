console.log('DEMO splice');

var array = [1, 2, 3, 4, 5, 6];
console.log('it', array);
splice(array, 2, 3);
console.log(
	'should remove elements in index 2, 3, 4 from array and return new array with the removed values'
);

var array = [1, 2, 3, 4, 5, 6];
console.log('it', array);
splice(array, 2, 3, 'value');
console.log(
	'should return new array with values from index 2, 3, 4, and remove them from original array replacing the index with the given string'
);

var array = [1, 2, 3, 4, 5, 6];
console.log('it', array);
splice(array, 2, 3, 100);
console.log(
	'should return new array with values from index 2, 3, 4, and remove them from original array replacing the index with the given number'
);
