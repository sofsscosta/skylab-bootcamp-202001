var array = [1,2,3,4,5];

function reverse(array){
    var newArray = [];
    for (var j=0; j<array.length; j++){
        newArray[j] = array[j];
    }
    for (var i=0; i<array.length; i++){
        array[i] = newArray[newArray.length -1 - i];
    }
    return array;
}

console.log(reverse(array));