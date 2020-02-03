'use strict'

function indexof(array, value) {
    
    if (value < 0) {
        for (var i = array.length + value; i = 0; i--) {
            if (array[i] === value) {
                return i
            }
        }
    }

    else {

        for (var i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return i
            }
        }
    } return -1
}

var a = [1, 2, 3, 4]
var b = 3

console.log(indexof(a, b))
