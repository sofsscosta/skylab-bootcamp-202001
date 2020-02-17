var list = ['broccoli', 3, 25, true, 'i-miss-soup']

function slice (array, start, end) {

    var sliced = []
    if (end != undefined && end < array.length) {
    for (var j = start; j<end; j++) {
        sliced[sliced.length]=array[j]}
    }
    else {for (var j = start; j<array.length; j++) {
        sliced[sliced.length]=array[j]}
    }
    console.log(sliced)
}

slice(list, 2, 6)