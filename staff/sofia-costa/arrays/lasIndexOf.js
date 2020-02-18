var array1 = [5, 12, 8, 130, 44]

function lastIndexOf (array, functionHere) { debugger
    var isIt
    for (var i = array.length; i>0; i--) {
        if (functionHere(array[i])) {return isIt = i}
    } 
    if (isIt) return isIt
    else return -1  
}

lastIndexOf(array1, function(element) {return element === 0})