var array = [1,2,3,4,5];

function includes(array, value, indexFrom = 0){
    if (indexFrom < 0){
        indexFrom = array.length + indexFrom;
        if (indexFrom < 0){
            indexFrom = 0;
        }
    }
    for (var i=indexFrom; i<array.length; i++){
        if (array[i] === value){
            return true;
        }
    }
    return false;
}

console.log(includes(array, 3, 2));
