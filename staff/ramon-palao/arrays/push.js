var a = [1, 2, 3];


function push(array, ...elements){
    for (var i = 0; i < elements.length; i++){
        array[array.length] = elements[i];
    }
    return array;
}

console.log(push(a, 6, 6, 7, 8, 9));
//Expected output: [1, 2, 3, 6]