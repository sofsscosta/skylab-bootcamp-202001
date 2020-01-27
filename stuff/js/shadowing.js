var a = 4

function fun(x) {
    var a = x

    return a
}

console.log(fun(6))
console.log(a)
//6
//4

// demo 2

a = 4

function fun(x) {
    a = x

    return a
}

console.log(fun(6))
console.log(a)
//6
//6

// demo 3

//var a = 4

function fun(x) {
    a = x

    return a
}

console.log(fun(6))
console.log(a)
//6
//6

window.a
//6