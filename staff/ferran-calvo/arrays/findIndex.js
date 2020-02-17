function findIndex(array, expresion) {
    for(var i = 0; i < array.length; i++) {
        if(expresion(array[i])) {
             return i
        }
    }
    return -1
}
var f= function (element){
    return element>0;
}
console.log(findIndex([1,10,5], f))