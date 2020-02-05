'use strict'
console.log("DEMO includes------------------------------------------------------");

var a = [1, 2, 3];
console.log('it should return whether an array includes a certain value among its entries, returning true or false as appropriate: ',
includes(a, 2, 1));

var b = [10, 20, 30];
console.log('it should return whether an array includes a certain value among its entries, returning true or false as appropriate: ',
includes(b, 22));

var c = [10, 20, 30];
console.log('it should return whether an array includes a certain value among its entries, returning true or false as appropriate: ',
includes(c, 20, -2));