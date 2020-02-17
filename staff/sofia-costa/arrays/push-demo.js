console.log('DEMO push');

var a = [1, 2, 3];
console.log('it', a);
push(a, 1);
console.log('should array be modified by adding one number', a);

var a = [1, 2, 3];
console.log('it', a);
push(a, 6, 2, 7)
console.log('should array be modified by adding numerous parameters to its end');

var a = [1, 2, 3];
console.log('it', a);
push(a, [1, 2, 4], 'sofia')
console.log('should array be modified by adding a different type of data');
