console.log('DEMO filter');

var arr = ['hola', 'en tu cara', 1, 6, [1, 2]];
console.log('it', arr);
var filtered = filter(arr, function(element) {
	return element.length > 3;
});
console.log(
	'should new array be returned with elements with length higher than 3',
	filtered
);

var arr = ['hola', 'en tu cara', 1, 6, [1, 2]];
console.log('it', arr);
var filtered = filter(arr, function(element) {
	return element > 5;
});
console.log(
	'should new array be returned with numbers higher than 5',
	filtered
);

var arr = ['hola', 'en tu cara', 1, 6, [1, 2]];
console.log('it', arr);
var filtered = filter(arr, function(element) {
	return typeof element === 'object';
});
console.log(
	'should new array be returned only with elements of type object(ei:array)',
	filtered
);
