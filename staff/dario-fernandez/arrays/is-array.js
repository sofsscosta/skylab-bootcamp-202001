'use strict'

function isArray(array) {
    return array.__proto__.constructor.name === 'Array'
}

// --------TEST-----

// var arrayTest = [1, 2, 3]

// console.log('Should say true ==> ' + isArray(arrayTest))