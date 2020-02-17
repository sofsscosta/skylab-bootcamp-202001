array1= [3, 8, 25, 30, 90, 12, 111];
function filter(a, expression){
    var newArray= [];
    for (var i=0; i<a.length; i++){
        if (expression(a[i])){
            newArray[newArray.length] = a[i];
        }
    }
    return newArray;
}
var c = filter(array1, function(value){return value>20});
console.log(c);