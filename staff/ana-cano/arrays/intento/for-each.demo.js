'use strict';

console.log('DEMO forEach');
var a = [1, 2, 3];
console.log('it', a);
a.forEach(function(elemento, indice, arreglo) {
    arreglo[indice] = elemento + 10
})
console.log(a)
console.log('should array be modified adding 10 to each value', a);

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