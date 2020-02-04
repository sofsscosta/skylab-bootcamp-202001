'use strict';

function splice(array, index, count, value) {
    if (!(array instanceof Array)) { throw new TypeError(array +' is not an Array')};
    var result = []
    getComputedStyle
    for (var i = 1; i <= count; i++) {
        result[result.length] = array[index + (i - 1)];
    }
    if (value) {
        array[index] = value;
        count = count - 1;
        var newIndex = index + 1
    }
    for (var b = newIndex || index ; b < array.length; b++) {
        array[b] = array[b + count];
    }
    array.length = array.length - (count);
    //console.log(array);
    return result;
}