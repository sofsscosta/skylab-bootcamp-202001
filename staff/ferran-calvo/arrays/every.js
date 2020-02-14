array1= [3, 8, 25, 30, 90, 12, 111];
function every(a, expression){
    for (var i=0; i<a.length; i++){
        if (expression(a[i]) == false){
            return false;
        }
    }
    return true;
}
var c = every(array1, function(value){return value>0});
console.log(c);