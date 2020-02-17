/*var array1=['a','b','c'];
var array2=['d','e','f'];

function concat(a1, a2){
    for (var i=0; i<a2.length;  i++){
        a1[a1.length]=a2[i];
    }
    return a1;
}
console.log(concat(array1, array2));*/

function concat(){
    var newArray = []
    for(var i = 0; i<arguments.length; i++){
        if(!(arguments[i] instanceof Array)) throw new TypeError(arguments[i] + ' is not an array')
        for(var j = 0; j<arguments[i].length; j++){
            newArray[newArray.length] = arguments[i][j]
        }
    }
    return newArray;
} 
