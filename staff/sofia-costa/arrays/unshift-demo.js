console.log('DEMO unshift');

var a = [1, 2, 3];
console.log('it', a);
unshift(a, 5, 6);
console.log('should array be modified by adding the passed values as arguments', a)

var a = [1, 2, 'lalalalapoly'];
console.log('it', a);
unshift(a, 'perro', 'surdo');
console.log('should array be modified by deleting its first element', a)