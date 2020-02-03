var a = [1, 2, 3, 4]


function unshift (array, value){
    var result = [];
    result[0] = value
    for (var i = 0; i < array.length; i++){
        result[i + 1] = array[i]
    }
    return result;
}
console.log(unshift(a, 5))
//Expected output: [5, 1, 2, 3, 4]