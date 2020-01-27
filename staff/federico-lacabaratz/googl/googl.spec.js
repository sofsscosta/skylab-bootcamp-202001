// TODO create tests with just console.assert (check that each item has at least a title and a description)

'use strict';

console.log('------------------------ TEST Googl ------------------------');

console.assert(result.title, 'each item should have at least a title');
console.assert(result.title && result.description, 'each item should have at least a title and a description');
console.assert(result.title && result.description && result.rating, 'each item should have at least a title, a description and a rating');