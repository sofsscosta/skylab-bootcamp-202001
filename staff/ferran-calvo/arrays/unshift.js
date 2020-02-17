//var a=[1,2,3,4];
function unshift(array, ...elements){
    var newLength = array.length;
    array.length += elements.length;
    for (var i=newLength-1; i>=0; i--){
        array[i+elements.length] = array[i];
    }
    for (var j=0; j<elements.length; j++){
        array[j] = elements[j];
    }
    return array.length
}
//console.log(unshift(a,0,0,2,'a','b'));
//console.log(a);