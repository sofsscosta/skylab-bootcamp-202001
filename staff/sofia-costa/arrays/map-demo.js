console.log('DEMO map');


var lista = [3, 6, 1, 8, 0]
console.log('it', lista);
map(lista, function (el) {return el * 2})
console.log('should each value be multiplied by 2 and gathered in a new array');

var a = [1, 2, 3];
console.log('it', a);
map(a, function(el) { return console.log('num ' + el) });
console.log('should each value be added 10 and printed out');

var a = [{name: 'joana'}, {name: 'miguel'}, {name: 'mário'}];
map(a, function(person) { return person.name } )
console.log('should each element be an object and its property be returned');