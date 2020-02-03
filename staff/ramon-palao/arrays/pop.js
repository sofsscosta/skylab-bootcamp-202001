var a = [1, 2, 3, 4, 5];


function pop (array){
    var result = [];
    for (var i = 0; i < array.length - 1; i++){
        result[i] = array[i];
    }
    return result;
}

console.log(pop(a));
//Expected output: [1, 2, 3, 4]