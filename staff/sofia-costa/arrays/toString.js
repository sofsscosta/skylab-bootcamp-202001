var array = ['olá', 'hola', 'salut', 'ciao']

function toString (array) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an Array');

    var arr
    for (var i = 0; i<array.length; i++) {
        if (i===0) arr = array[i]
        else arr += ',' + array[i]
    }
    return arr
}

toString(array)