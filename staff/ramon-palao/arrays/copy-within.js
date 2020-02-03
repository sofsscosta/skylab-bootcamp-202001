array1= ['1','2','3','4','5'];
var originalArray = [];
function copyWithin(a, index, iStart = 0, iEnd = a.length){
    for (var i=0; i<a.length; i++){
        originalArray[i] = a[i];
    }
    if (index < 0){
        index = a.length + index
    }
    if (iStart < 0){
        iStart = a.length + iStart
    }
    if (iEnd < 0){
        iEnd = a.length + iEnd
    }
    var nElements = iEnd-iStart;
    for (var i=0; i<nElements; i++){debugger
        if ((index+i) < a.length){
            a[index+i] = originalArray[iStart+i];
        }
        else{
            return a;
        }
    }   
    return a;
}
console.log(copyWithin(array1,3,2,4));