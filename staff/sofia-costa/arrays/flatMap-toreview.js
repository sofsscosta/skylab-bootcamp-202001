var array = [2, 4, 6, 8, 10]

function flatMap (array, callback, currentValue, index) { debugger
    var newArray = []
    for (var index = 0; index<array.length; index++) {
        currentValue = array[index]
        var current = callback(currentValue, index)
        current.forEach(function(value){newArray[newArray.length] = value})
    }

    return newArray
}

flatMap(array, function(currentValue, index) {return [currentValue * 2, index]})