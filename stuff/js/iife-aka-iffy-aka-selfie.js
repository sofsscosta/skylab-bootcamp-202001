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