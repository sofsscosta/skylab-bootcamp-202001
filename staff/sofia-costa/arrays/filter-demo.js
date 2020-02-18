console.log('DEMO filter');



var list = ['broccoli', 3, 25, true, 'i-miss-soup']
console.log('it', array1);
filter(list, function(element) {return isNaN(element)})
console.log('should the array contain any elements that satisfy the function passed')



var list = ['broccoli', 3, 25, true, 'i-miss-soup']
console.log('it', array1);
filter(list, function(element) {return element == 26})
console.log('should the array not contain any elements that satisfy the function passed')
