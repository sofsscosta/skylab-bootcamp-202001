function map(array, expression) {
    var maped = [];

    for (var i = 0; i < array.length; i++) {
        maped[i] = expression(array[i], i);
    }
}


