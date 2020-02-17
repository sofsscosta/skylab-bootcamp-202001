var array1 = [1, 3, 5]
var array2 = [2, 4, 6]
var array3 = ['yo que se', 4, true]


function concat (array) {

    if (!(array instanceof Array)) {throw new TypeError(array + ' is not an Array')}

    for (var i = 1; i<arguments.length; i++) {
        for (var j = 0; j<arguments[i].length; j++) {
            array[array.length] = arguments[i][j]
        }
    }
    console.log(array)
}

concat(array1, array2)