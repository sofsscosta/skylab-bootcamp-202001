// var array = [2, 5, [3, 2], 0, [4, 5, [7, 2]], [8, 2, 4], 9, [2, 1, 4]]

function flat (array, depth) { 
    if (!(array instanceof Array)) {throw new TypeError(array + ' is not an Array')}

    var newArr = [];
    if (!depth) depth = 1
    if (isNaN(depth)) return array

    function getValues (element, depth) {

        for (var i = 0; i<element.length; i++){
            
            if (element[i] instanceof Array && depth > 0) {
             
                getValues(element[i], depth-1)}
            
            else newArr[newArr.length] = element[i]
        }
     }
     getValues(array, depth)
     return newArr
}
    

// flat(array)