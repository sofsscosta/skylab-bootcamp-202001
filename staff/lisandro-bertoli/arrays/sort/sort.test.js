console.log('TEST sort');

var arr = [9, 2, 5, 3, 7, 8, 4];
var arr2 = ['9', 2, 'test', 1, 8];

//Test 1
console.log('The modified array should be returnerd, no new copy should be made');
var arrCopy = arr.map(function (element) { return element });
var sorted = sort(arrCopy);
console.assert(arrCopy.forEach(function (element, index) {
    return element === arrCopy[index];
}), 'The original array is not being modified');



// MIRAR EL STASH ANTES DE EMPEZAR!!!