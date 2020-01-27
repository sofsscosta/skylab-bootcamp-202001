var f = function() { 
    //debugger; 
    console.log(this.name)
}

//f()
//window.f()

var o = { name: 'Peter' }

//f.call(o)
//f.apply(o)

//o.f = f
//o.f()
//window.f()
//console.assert(o.f === window.f, 'should be same function')

//var f2 = f.bind(o)
//f2()

var f2 = bind(f, o)

function bind(func, ctx) {
     return function() {
        func.call(ctx)
     }   
}

f2()