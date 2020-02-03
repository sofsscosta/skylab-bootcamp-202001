console.log('DEMO concat');

var arr = [1, 2, 3];
console.log('it', arr);
concat(arr, [4, 5]);
console.log('should new array be returned with values added', arr);

var arr = [1, 2, 3];
console.log('it', arr);
concat(arr, 5);
console.log('should new array be returned with non array value added', arr);

var arr = [1, 2, 3];
console.log('it', arr);
concat(arr, [4, 5], 1, 'string');
console.log(
	'should new array be returned with different types of values added',
	arr
);
