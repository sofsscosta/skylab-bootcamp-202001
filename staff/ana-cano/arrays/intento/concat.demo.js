'use strict';

console.log('DEMO concat');
var a = [1, 2, 3];
var b = [2, 3, 5]
console.log('it', a);
console.log('it2', b)
var c = a.concat(b)
console.log('should print these two arrays together')

console.log('array', c);

var a = [1, 2, 3];
console.log('it', a);
a.forEach(function(elemento, indice, arreglo) {
    return console.log(arreglo[indice] = elemento + 10)
})
console.log('should each value be added 10 and printed out');

var a = [1, 2, 3];
console.log('it', a);
a.forEach(function(elemento, indice, arreglo) {
    return console.log(arreglo[indice] = elemento + indice)
})
console.log('should each value be added the index and printed out');