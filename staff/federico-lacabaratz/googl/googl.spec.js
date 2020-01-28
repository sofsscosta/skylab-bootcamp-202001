// TODO create tests with just console.assert (check that each item has at least a title and a description)

'use strict';

console.log('------------------------ TEST Googl ------------------------');

console.assert(!(result === undefined), 'Should fail if there is not a result');
console.assert(result.title, 'Should fail, because each item should have at least a title');
console.assert(result.description, 'Should fail, because each item should have at least a title and a description');
