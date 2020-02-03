var b = [3, 8, 12, 6, 7];

function findIndex(array, expression){
    for (var i = 0; i < array.length; i++){
        if(expression(array[i])){
         return i;
        }
    }
    return -1;
}
var c = findIndex(b, function(value){ return value > 10})
console.log(c);
//Expected output: 2
