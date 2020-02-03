'use strict'
function flat(array, depth = 1) {
    var newArray = []
    for(var i = 0; i < array.length; i++) {
        if(array[i].__proto__.constructor.name === 'Array' && depth > 0) {
            var subarray = flat(array[i], depth - 1)
            for(var j = 0; j < subarray.length; j++){
                newArray[newArray.length] = subarray[j]
            }
        } else {
            newArray[newArray.length] = array[i]
        }
    }
    return newArray
}