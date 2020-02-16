var array = [0,1,2,3]
var newArray = []
var c = []

function unshift (array, values) {
    for (var i = 1; i<arguments.length; i++) {
        newArray[i-1]=arguments[i]
        c[i-1]=arguments[i] 
    }
    for (var i = 0; i<array.length; i++) {
        newArray[newArray.length]=array[i]}
    

    console.log(array.length)
    return array = newArray
}

unshift(array, 2, 3)