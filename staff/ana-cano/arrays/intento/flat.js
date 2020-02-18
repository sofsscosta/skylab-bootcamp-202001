"use strict"


function flat(array, deepLevel = 1) {
    var newArray = [];

    debugger;
    for (var i = 0; i < array.length; i++) {

        // if it's array
        if (Object.prototype.toString.apply(array[i]) === "[object Array]") {
            var subArray = array[i];

            // if you want to go to a deeper level 
            if (deepLevel > 1) {
                subArray = flat(subArray, deepLevel - 1)
            }

            for (var j = 0; j < subArray.length; j++) {
                newArray[newArray.length] = subArray[j]
            }

            // if is not array 
        } else {
            newArray[newArray.length] = array[i];
        }

    }

    return newArray

}
var a = [1, 2, [3, [4, 5, [6, 5]]]]
console.log(flat(a))
console.log(a)