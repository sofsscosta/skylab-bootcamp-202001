function newShift (arr){
    if(!(arr instanceof Array)) throw new TypeError(arr + ' is not Array');

    var result ;
    result = arr[0];
    for (var i=1; i< arr.length; i++){
        arr[i-1] = arr[i]
    }
    arr.length = arr.length-1
    return (result)
}

