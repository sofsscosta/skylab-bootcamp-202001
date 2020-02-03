'use strict'

function every(arr, expresion){
    if(!(arr instanceof Array )) throw new TypeError(arr + ' is not Array')
    if(typeof expresion !== 'function') throw new TypeError(expresion + ' is not a Function got ' + typeof expresion + ' instead')

    for (var i=0; i < arr.length; i++){
        if(!expresion(arr[i])){
            return false
        }
    }return true
}