var a=[1,2,3,4];
function shift(array){
    if (!(array instanceof Array)) throw new TypeError(array + " is not an array");

    var shiftedElement = array[0];
    for (var i=0; i<array.length; i++){
        array[i] = array[i+1];
    }
    array.length = array.length-1;
    return shiftedElement
}
console.log(shift(a));
console.log(a);