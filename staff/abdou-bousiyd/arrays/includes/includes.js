function includes(array, element, position = 0) {

    for(let i = position; i < array.length; i++) {
        if(array[i] === element) return true
    }
    return false
}