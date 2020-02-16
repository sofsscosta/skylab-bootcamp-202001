console.log('DEMO pop');

var a = [1, 2, 3];
console.log('it', a);
pop(a);
console.log('should array be modified by deleting its last element', a)

var a = [1, 2, 'lalalalapoly'];
console.log('it', a);
pop(a);
console.log('should array be modified by deleting its last element, which is a string', a)