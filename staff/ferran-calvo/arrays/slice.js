array = [1,2,3,4];

function slice(array, indexStart = 0, indexEnd = 0){
    var newArray = [];
    if (indexStart <=0){
        indexStart += array.length;
    }
    if (indexEnd <=0){
        indexEnd += array.length;
    }
    for (var i=indexStart; i<indexEnd; i++){
        newArray[newArray.length] = array[i];
    }
    return newArray
}
console.log(slice(array,-3,-1))