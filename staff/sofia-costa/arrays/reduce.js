var array1 = [2, 5, 3, 7, 9]

function reduce (array, accumulator) { debugger
    var accumulated = 0
    
    for (var i = 0; i<array.length; i++) {
        accumulated += array[i]
        }
    
    if (accumulator) accumulated += accumulator
    return accumulated
    
}

// reduce(array1, 3)