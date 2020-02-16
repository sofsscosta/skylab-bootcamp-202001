var array = ['broccoli', 3, 25, true, 'i-miss-soup']

function splice (array, start, numElements) {

    var newArray = []
    var spliced = []
    
    for (var i = 0; i<start; i++) {
        newArray[i]=array[i]}
    if(numElements===undefined) numElements = 0
    for (var j = start; j<numElements+start; j++) {
        spliced[spliced.length]=array[j]}
    for(var h = 3; h<arguments.length; h++)
        {newArray[newArray.length] = arguments[h]}
    for (var n = start + numElements; n<array.length; n++) {
        newArray[newArray.length]=array[n]}

    for (var i = 0; i < newArray.length; i++) {
        array[i] = newArray[i];
    }
    return spliced
}

//splice(array, 2, 0, 'maria', 'joao')
