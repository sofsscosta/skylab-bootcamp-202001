var array1 = [2, 3, 4, 5, 6, 7]

function every (array, expression) {

    if (!(array instanceof Array)) throw new TypeError(array + ' is not an Array');
    if(typeof expression !== 'function') throw new TypeError(expression + ' is not a function')

    var all = 0
    for (var i = 0; i<array.length; i++) {
        if (expression(array[i])) all += 1
    }
    if (all = array.length) return true
    else return false
}

// every (array1, function (el) {return el>1} )