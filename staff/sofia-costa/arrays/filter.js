var list = ['broccoli', 3, 25, true, 'i-miss-soup']

function filter (array, functionHere) {
    
    var newArray = []

    for (var i=0; i<array.length; i++){
        functionHere(array[i]) === true ? newArray[newArray.length] = array[i] : ''
    }
    return newArray
}

filter(list, function(element) {return isNaN(element)})