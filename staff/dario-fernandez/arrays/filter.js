'use strict'

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(function (word){
//     return word.length > 6
// })

// console.log(result);

function filter(array, callback) {
    newArray = [];
    for(var i = 0; i < array.length; i++){
        if(callback(array[i])) {
            newArray[newArray.length] = array[i];
        }
    }
    return newArray;
}

// var numbers = [1, 2, 3, 4, 5 ,6, 7, 8, 9];

// console.log(filter(numbers, function(number) {
//     return number > 5;
// }))