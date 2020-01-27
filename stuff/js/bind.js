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

//var f2 = bind(f, o)

Function.prototype.bind = function(ctx) {
    var self = this

    var binded = function() {
        return self.apply(ctx, arguments)
     }   

    binded.unbind = function() {
        return self
    }

     return binded
}

var f2 = f.bind(o)

//f2('hola')

var p = { name: 'John' }
var f3 = f2.bind(p)
console.log(f3('hola'))

var f3 = f2.unbind().bind(p)

console.log(f3('hola'))