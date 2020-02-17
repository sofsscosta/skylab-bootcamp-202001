function findIndex(array, expresion) {
    for(var i = 0; i < array.length; i++) {
        if(expresion(array[i])) {
             return i
        }
    }
    return -1
}