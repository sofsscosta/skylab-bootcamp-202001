function func(x) {
    console.log(tion)

    return tion(x)

    function tion(x) {
        return x
    }
}

console.log(func(6))
// ƒ tion(x) {
//     return x
// }
// 6

// but if we split declaration vs definition

function func(x) {
    console.log(tion)

    return tion(x)

    var tion = function(x) {
        return x
    }
}

console.log(func(6))
// undefined
// Uncaught TypeError: tion is not a function
//     at func (<anonymous>:6:12)
//     at <anonymous>:13:13