var lista = [3, 6, 1, 8, 0]
var newArray = []

function map (array, functionHere) {

    for (var i=0; i<array.length; i++){
        if (functionHere(array[i])) return array[i]
    }
}

map(lista, function (el) { return el > -1 })