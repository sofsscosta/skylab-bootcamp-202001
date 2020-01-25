function fun(array) {
    array = [4, 5, 6]
    /*array[0] = 4
    array[1] = 5
    array[2] = 6*/
}


var array = [1, 2, 3] 

fun(array)

console.log(array)
// (3) [1, 2, 3]

// demo 2

function fun(array) {
    //array = [4, 5, 6]
    array[0] = 4
    array[1] = 5
    array[2] = 6
}


var array = [1, 2, 3] 

fun(array)

console.log(array)
// (3) [4, 5, 6]

