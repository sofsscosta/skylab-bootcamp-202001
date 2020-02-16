var array1 = [['March', 'Jan', 'Feb', 'Dec']]

function sort (array, functionHere) {
    var newArr = []
    if (functionHere === undefined){
        do {
            if (array[i]<newArr[i]){
                newArr[newArr.length] = array[i]
            } 
        } while (newArr.length<array.length)
    }
    else {
        for (var i = 0; i<array.length; i++){
            newArr[newArr.length] = functionHere(array[i])
        }
    }
    array = newArr
    return array
}

sort(array1)




var array1 = [['March', 'Jan', 'Feb', 'Dec']]

function sort (array, functionHere) {
    var newArr = []
    if (functionHere === undefined){
        do {
			for (var i = 0; i<array.length; i++) {
                if (array[i]<newArr[i]){
                    newArr[newArr.length] = array[i]
                } 
        } 
    } while (newArr.length<array.length) } 
    else {
        for (var i = 0; i<array.length; i++){
            newArr[newArr.length] = functionHere(array[i])
        }
    }
    array = newArr
    return array
}

sort(array1)




var array1 = [4, 2, 8, 1, 3, 9]

function sort (array, functionHere) { debugger    
    if (functionHere === undefined){
    for (var i = 0; i<array.length; i++) {
        
        var b = array[i]
        var a = array[i+1]
        array[i] = a
        array[i+1] = b
        }    
    return array
    }
}
                            
sort(array1)