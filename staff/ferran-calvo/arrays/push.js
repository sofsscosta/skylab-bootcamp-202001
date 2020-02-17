var array=[1,2,3];

function push(a, ...element){
    if (!(array instanceof Array)) throw TypeError (array + ' is not an array');
    
    for (var i=0; i<element.length; i++){
        a[a.length] = element[i];
    }
    return a.length;
}

console.log(push(array, 4,5,6,7,8,9,10));
console.log(array);