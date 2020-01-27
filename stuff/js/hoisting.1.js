var a = 4

function fun(x) {
    a = x

    return a

    var a
}

console.log(fun(6))
console.log(a)
//6
//4

// demo 2

var a = 4

function fun(x) {
    //a = x

    return a

    var a = x
}

console.log(fun(6))
console.log(a)
//undefined
//4

// equivalent to

var a = 4

function fun(x) {
    var a

    return a

    a = x
}

console.log(fun(6))
console.log(a)
//undefined
//4