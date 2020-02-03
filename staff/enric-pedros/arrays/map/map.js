'use strict'

console.log('creates a new arry applying the conditions')
function map(arr, expresion){
    var newarray=[]
    for (var i=0; i < arr.length; i++){
                    
        if(expresion(a[i])!== isNaN){
            newarray[newarray.length] = expresion(a[i])
        }
    }
    return newarray
}

