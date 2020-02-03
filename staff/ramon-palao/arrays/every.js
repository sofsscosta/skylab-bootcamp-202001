var array1= [3, 8, 25, 30, 90, 12, 111];

function every(a, expression){
    if(!(a instanceof Array)) throw new TypeError(a + " is not an Array");
    if(typeof expression !== 'function') throw new TypeError(expression + ' is not a function');
    for (var i=0; i<a.length; i++){
        if (expression(a[i]) == false){
            return false;
        }
    }
    return true;
}

//var c = every(array1, function(value){return value>10});
//console.log(c);