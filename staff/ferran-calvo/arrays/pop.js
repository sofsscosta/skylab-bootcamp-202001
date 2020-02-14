var array=[1,2,3,4,5];

function pop(a){
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array');
    var popElement;
    popElement = array[array.length-1];
    array.length=array.length-1;
    return popElement
}

console.log(pop(array))
