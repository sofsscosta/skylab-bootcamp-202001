var o =  {
    set name(name) {
        this.__name__ = name.toUpperCase()
    },
    get name() {
        return this.__name__
    },
    get version() { return 'v1.0.0' }
}

o.name = 'Peter'
console.log(o.name)
console.dir(o)

var p = {}

Object.defineProperty(p, 'name', {
    set(name) {
        this.__name__ = name.toUpperCase()
    },
    get() {
        return this.__name__
    }
})

Object.defineProperty(p, 'version', {
    get() {
        return 'v1.0.0'
    }
})

p.name = 'Petra'
console.log(p.name)
console.dir(p)

var q = {}

Object.defineProperties(q, {
    name : {
        set(name) {
            this.__name__ = name.toUpperCase()
        },
        get() {
            return this.__name__
        }
    },
    version: { get() { return 'v1.0.0' } }
})

q.name = 'Quatro'
console.log(q.name)
console.dir(q)