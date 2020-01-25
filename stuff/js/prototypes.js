function salute(name) {
    console.log(this.name + ': Hello, ' + name + '!')
}

//salute('Tete')

var o = {}
o.name = 'Oscar'
//salute.call(o, 'Tete')
o.salute = salute
o.salute('Tete')


// Oscar: Hello, Tete!

// 2

function Human(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
}

Human.prototype.salute = function(name) {
    return this.name + ': Hello, ' + name + '!'
}

var james = new Human('James', 34, 'male')
console.log(james.salute('Mary'))

var mary = new Human('Mary', 28, 'female')
console.log(mary.salute('James'))


// James: Hello, Mary!
// Mary: Hello, James!