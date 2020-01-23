var speak = (function() {
    var speaker = prompt('name')

    return function(message) {
        console.log(speaker + ': ' + message)
    }
})()

speak('hola mundo')
speak('bye world')

// 2

var func = (function() {
    var a = 1

    return function() { return a }
})()

var tion = (function() { var a = 2; return function() { return a } })()

console.log(func())
console.log(tion())