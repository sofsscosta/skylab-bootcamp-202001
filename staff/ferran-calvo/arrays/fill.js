array1=[1,2,3];
function fill(a, value, start = 0, end = a.length){
    if (start < 0){
        start += a.length;
    }
    if (end < 0){
        end += a.length;
    }
    nElements=end-start;
    for (var i=0; i<nElements; i++){
        a[start+i] = value;
    }
    return a;
}
console.log(fill(array1, 4));