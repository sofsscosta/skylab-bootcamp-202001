function Animal(name, species, age, gender) {
    this.name = name
    this.species = species
    this.age = age
    this.gender = gender
}

Animal.prototype.pee = function() {
    console.log('psssssss')
}

Animal.prototype.poo = function() {
    console.log('plofff')
}

var nemo = new Animal('Nemo', 'fish', 5, 'male')
//nemo.pee()

function Human(name, age, gender) {
    Animal.call(this, name, 'human', age, gender)
}

Human.prototype = new Animal

Human.prototype.salute = function(name) {
    console.log(this.name + ': Hello, ' + name + '!')
}

var james = new Human('James', 34, 'male')
james.salute('Mary')
james.poo()

var mary = new Human('Mary', 28, 'female')
mary.salute('James')
mary.pee()