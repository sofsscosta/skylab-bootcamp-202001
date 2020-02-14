//a = [1, 2, [3, 4,[5,6,[7,8,9,[10,11,12]]]]];
//var newArray = [];
/*function flat(array, depth = 1){
    for (var i=0; i<array.length; i++){
        if (array[i] instanceof Array & depth>0){
            flat(array[i], depth-1);
        }
        else{
            newArray[newArray.length]=array[i];
        }
    }
    return newArray;

    }
    
}
console.log(flat(a,3));*/
  
'use strict'
function flat(array, depth = 1) {
    var newArray = []
    for(var i = 0; i < array.length; i++) {
        if(array[i].__proto__.constructor.name === 'Array' && depth > 0) {
            var subarray = flat(array[i], depth - 1)
            for(var j = 0; j < subarray.length; j++){
                newArray[newArray.length] = subarray[j]
            }
        } else {
            newArray[newArray.length] = array[i]
        }
    }
    return newArray
}
