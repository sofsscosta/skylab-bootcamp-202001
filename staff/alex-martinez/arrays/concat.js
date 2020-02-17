'use strict'

function concat(){
    if(!(arguments[0] instanceof Array)) throw new TypeError(arguments[0]+' is not an array')
    var newArray = [];
    for(var i=0; i<arguments.length; i++){
        if(arguments[i] instanceof Array){
            var items = arguments[i];

            for(var j=0; j<items.length; j++){
                
                newArray[newArray.length] = items[j];
            }
        }else{
            newArray[newArray.length] = arguments[i];
        }
    }
    return newArray;
}
