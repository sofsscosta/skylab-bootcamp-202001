'use strict'
const ages = [15, 48, 56, 72, 35, 45]

function find(array, expression) {
    var foundElement;

    for (var i = 0; i < array.length; i++) {

        if (expression(array[i])) {
            foundElement = array[i];
            break;
        }
    }
    return foundElement;
}

console.log(find(ages, function(element) {
    return element > 100;
}))