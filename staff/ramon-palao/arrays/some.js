var b = ["red", "green", "yellow", "pink"];

function some(array, expression){
    
    for (var i = 0; i < array.length; i++){
        if(expression(array[i])){
            return true;
        }
    }
    return false;
}
/*
console.log(b.some(function(value){
    return value === "yellow"
}));
//Expected output: true

console.log(b.some(function(value){
    return value === "orange"
}));
//Expected output: false
*/