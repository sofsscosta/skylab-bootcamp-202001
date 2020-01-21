console.log(5)


function filter(arr, callback) {
    var result = []
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result[result.length] = arr[i]
        }
    } return result
}


var a = [1, 2, 5, 8]

function getFilter(element) {
    return element < 8
}



console.log(filter(a, getFilter))