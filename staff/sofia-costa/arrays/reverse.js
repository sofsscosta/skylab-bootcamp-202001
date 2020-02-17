var array = [1, 2, 3, 4, 5]

function reverse(array) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an Array');

    var newArray = []
    for (var i = array.length-1; i>-1; i--) {
        newArray[newArray.length] = array[i]
    }
    array = newArray
    return array
}

reverse(array)