var array1 = [5, 12, 8, 130, 44]

function indexOf (array, element) { debugger
    for (var i = 0; i<array.length; i++) {
        if (array[i] === element) {return i}
    }	
}

indexOf(array1, 137)