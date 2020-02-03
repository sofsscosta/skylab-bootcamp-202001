var b = [3, 8, 12, 6, 15, 1, 32];

function filter (array, expression){
    if(!(array instanceof Array)) throw new TypeError(array + " is not an Array at filter");
    if(typeof expression !== "function") throw new TypeError(expression + " is not a function");
    var result = [];
    for (var i = 0; i < array.length; i++){
        if (expression(array[i])){
            result[result.length] = array[i];
        }
    }
    return result;
}
//var d = filter(b, function(value){ return value > 10})
//console.log(d);
//Expected output: [12, 15, 32]
