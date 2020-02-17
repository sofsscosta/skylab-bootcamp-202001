console.log('TEST join');

var array1 = ['me', 'gustan', 'zanahorias']
console.log('it', array1);


var result = join(array1)

console.assert((result === 1) )

join(array1)
console.log('should all the elements of an array be joined together. No changes to original array.', a)

var array1 = ['me', 'gustan', 'zanahorias']
console.log('it', a);
join(array1, ' ')
console.log('should all the elements of an array be joined together, separated by a space. No changes to original array.', a)

var array1 = ['me', 'gustan', 'zanahorias']
console.log('it', a);
join(array1, ', ')
console.log('should all the elements of an array be joined together, separated by a comma and a space. No changes to original array.', a)
