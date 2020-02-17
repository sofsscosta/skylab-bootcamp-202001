var array1 = ['donde', 'hay', 'un', 'bueno', 'oculista']
    

function includes (array, element, start) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an Array');
    if (start && typeof start !== 'number') throw new TypeError (start + ' is not a number') 

    var isThere

    if(start === undefined) start = 0
    for (var i = start; i<array.length; i++) {
        if (array[i] === element) return isThere=true
        else isThere=false
        }

    console.log(isThere)
}

// includes(array1, 'oculista')
// includes(array1, 'un', 1)
// includes(array1, 'hay', 3)
