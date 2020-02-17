var array1 = [5, 12, 8, 130, 44]

function findIndexOf (array, functionHere) { debugger
    for (var i = array.length; i>0; i--) {
        if (functionHere(array[i])) {return i}
    }   
}

findIndexOf(array1, function(element) {return element > 10})