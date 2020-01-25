var count = 0

try {
    (function fun() { 
        count++
        var hola = 'mundo'
//        setTimeout(fun, 100)
        fun()
    })()
} catch(error) {
    console.error(count, error)
}
//  RangeError: Maximum call stack size exceeded
//     at fun (<anonymous>:5:18)
//     at fun (<anonymous>:9:9)
//     at fun (<anonymous>:9:9)
//     at fun (<anonymous>:9:9)
//     at fun (<anonymous>:9:9)
//     at fun (<anonymous>:9:9)
//     at fun (<anonymous>:9:9)
//     at fun (<anonymous>:9:9)
//     at fun (<anonymous>:9:9)
//     at fun (<anonymous>:9:9)