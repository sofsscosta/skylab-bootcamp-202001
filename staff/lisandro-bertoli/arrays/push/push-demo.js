console.log('DEMO push');

var arr = [1, 2, 3];
console.log('it', arr);
push(arr, 1);
console.log(
	'should array be modified adding the number at the end. Return array length',
	arr
);

var arr = [1, 2, 3];
console.log('it', arr);
push(arr, 1, 'string');
console.log(
	'should array be modified adding the number AND the string at the end. Return array length',
	arr
);

var arr = [1, 2, 3];
console.log('it', arr);
push(arr, 1, [1], 'string');
console.log(
	'should array be modified adding the number AND the array AND the string at the end. Return array length',
	arr
);
