'use strict'

function reduce (arr, expresion, acum ){
    var results=0
    for (var i=0; i < arr.length; i++){
        results += expresion(arr[i])
    }
    return results + acum;
}

