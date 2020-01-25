var a = [1, 2, 3]

//for (var i = 0; i < a.length; i++) a[i] += 10
//a.forEach(function(value, index) { a[index] = value + 10 })

//var b = a.map(function(value) { return value + 10 })

function forEach(array, expression) {
    for (var i = 0; i < array.length; i++) expression(array[i], i)
}

//forEach(a, function(value, index) { a[index] = value + 10 })
//forEach(a, function(value) { console.log(value + 10) })

function map(array, expression) {
    var result = []

    for (var i = 0; i < array.length; i++) result[i] = expression(array[i], i)

    return result
}

var b = map(a, function(value) { return value + 10 })