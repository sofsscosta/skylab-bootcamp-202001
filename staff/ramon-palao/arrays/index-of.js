var a = ["ferran", "sofia", "monica", "marc", "ramon"];

function indexOf(array, value){
    
    for (var i = 0; i < array.length; i++){
        if (array[i] === value){
            return i;
        }
    }
    return -1;
}


//console.log(indexOf(a, "marc"));
//Expected output: 3