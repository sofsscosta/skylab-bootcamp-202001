var a = [1, 2, 3, 4];

function shift(array){
    var result = []
    for (var i = 1; i < array.length; i++){
        result[i -1] = array[i];
    }
    return result;
}

console.log(shift(a));
//Expected output: [2, 3, 4]