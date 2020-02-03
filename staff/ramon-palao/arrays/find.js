var b = [3, 4, 14, 19];

function find(array, expression){
    if(!(array instanceof Array)) throw new TypeError(array);
    if(typeof expression !== "function") throw new TypeError(expression);
    for (var i = 0; i < array.length; i++){
        if (expression(array[i])){
            return array[i];
        }
    }
    return undefined;
}
var c = find(b, function(element){
    return element > 11;
});
//console.log(c);
//Expected output: 14