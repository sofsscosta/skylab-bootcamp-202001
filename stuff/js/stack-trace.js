var array = ['a', 'b', 'c', 'd', 'e']
//var array = []

//var stackTrace // POCO PRO see stack trace in forced error instance

function forEach(array, expression, i) {
    i = typeof i === 'undefined'? 0 : i

    var stackIndex = i

    console.log('stack', 'i', stackIndex, 'start')

    //for (var i = 0; i < array.length; i++) expression(array[i])    
    
    if (i < array.length) {
        expression(array[i])

        forEach(array, expression, ++i)
    //} else stackTrace = new Error('end')
    } else debugger // PRO see stack strace in inspector

    console.log('stack', 'i', stackIndex, 'end')
}

forEach(array, console.log)

//console.log(stackTrace)