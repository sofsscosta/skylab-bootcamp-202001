

function newPop(array){
    if(!(array instanceof Array))throw new TypeError (array + ' is not Array');
    
    var lastPosition;
    if (array.length===0)return undefined
    else lastPosition = array[array.length-1];
    array.length = array.length-1;
    return lastPosition    
}

var a = [1,2,3,4]
console.log(newPop(a))

