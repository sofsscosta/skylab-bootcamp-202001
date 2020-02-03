var array = [1, 2, [3, 4], [5, 6,[7,8,9]]];

var newArray = [];

function flat(a, depth = 1){
    for (var i=0; i<a.length; i++){
        if (a[i] instanceof Array && depth>0){
            flat(a[i], depth-1);
        }
        else{
            newArray[newArray.length]=a[i];
        }
    }
    return newArray
}
console.log(flat(array, 2));