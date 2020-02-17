console.log('DEMO concat');

var a = [1, 2, 3];
var b = [4, 5, 6]
console.log('it', a);
concat(a, b);
console.log('should array be added another array', a, b, c)

var a = [1, 2, 'lalalalapoly'];
var b = [4, 5, 6]
var c = [7, 8, 9]
console.log('it', a);
concat(a, b, c);
console.log('should array be added numerous arrays', a, b, c)

var a = [1, 2, 'lalalalapoly'];
var b = [4, 5, 6]
var c = [[3], [6, 7]]
console.log('it', a);
concat(a, b, c);
console.log('should array be added nested arrays', a, b, c)