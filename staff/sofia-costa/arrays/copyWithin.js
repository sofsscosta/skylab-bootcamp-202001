var array1 = ['a', 'b', 'c', 'd', 'e', 'f']

function copyWithin (array, target, element, endElement) {
    if(endElement != undefined){
    for (var i = target; i<endElement; i++) {
        array[i] = array[element]
    }}
    else { for (var i = target; i<array.length; i++) {
        array[i] = array[element]
    }}
    console.log(array)
}

copyWithin(array1, 2, 5, 4)