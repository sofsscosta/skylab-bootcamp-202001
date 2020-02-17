var array = [0,1,2,3]
var newArray = []
var c

function shift (array) {
    var c = array[0]
    for (var i = 0; i < array.length; i++) {array[i]= array[i+1]}
    array.length = array.length -1
    console.log(c)
}