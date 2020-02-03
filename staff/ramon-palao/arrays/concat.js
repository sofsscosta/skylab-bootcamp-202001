var array1=['a','b','c'];
var array2=['d','e','f'];
​
function concat(a1, a2){
    for (var i=0; i<a2.length;  i++){
        a1[a1.length]=a2[i];
    }
    return a1;
}
console.log(concat(array1, array2));