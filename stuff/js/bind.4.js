var f = function(greeting) { 
    //debugger; 
    console.log(greeting + ' ' + this.name)

    return this.name
}

window.name = 'window'
//f('hola')
//window.f('hello')

var o = { name: 'Peter' }

//f.call(o, 'hola')
//f.apply(o, ['hello'])

//o.f = f
//o.f()
//window.f()
//console.assert(o.f === window.f, 'should be same function')

//var f2 = f.bind(o)
//f2('hola')

var f2 = bind(f, o)

function bind(func, ctx) {
    var binded = function() {
        return func.apply(ctx, arguments)
     }   

    binded.unbind = function() {
        return func
    }

     return binded
}

//f2('hola')

var p = { name: 'John' }
var f3 = bind(f2, p)
//var f3 = f2.bind(p)
console.log(f3('hola'))

var f3 = bind(f2.unbind(), p)
//var f3 = f2.unbind().bind(p)

console.log(f3('hola'))