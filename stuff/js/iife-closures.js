(function() {
    function add(a, b) {
        if (typeof a !== 'number' || isNaN(a)) throw new TypeError('a => ' + a + ' is not a number')
        if (typeof b !== 'number' || isNaN(b)) throw new TypeError('b => ' + b + ' is not a number')

        return a + b
    }

    //function start() {
    (function start() {
        try {        
            var a = Number(prompt('a'))
            var b = Number(prompt('b'))

            alert(add(a, b))
        } catch(error) {
            alert(error.message)
            
            start()
        } finally {
            //add = undefined
        }
    //}
    })()

    //start()
})()

// 2

var speak = (function() {
    var speaker = prompt('name')

    return function(message) {
        console.log(speaker + ': ' + message)
    }
})()

speak('hola mundo')
speak('bye world')

// 3

var func = (function() {
    var a = 1

    return function() { return a }
})()

var tion = (function() { var a = 2; return function() { return a } })()

console.log(func())
console.log(tion())