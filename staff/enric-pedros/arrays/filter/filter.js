    'use strict';




function filter(a,expresion){
    if(!(a instanceof Array)) throw new TypeError(a + 'is not Array');
    if (typeof expresion !== 'function') throw new TypeError(expresion + 'is not a function')

    var newarray=[]
    for (var i=0; i<a.length; i++){
        if(expresion(a[i])){
            newarray[newarray.length]=a[i]
        }
    }
    return newarray
}
