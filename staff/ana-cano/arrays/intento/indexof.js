var indexindex = [5, 4, 5, 8, 4, 5, 1]


function indexof(array, element) {
    var indexFound = -1;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            indexFound = i;
        }
    }
    return indexFound;
}