function extend(parent, child) {
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
}

function Being(species, age) {
    this.species = species
    this.age = age
}

Being.prototype.birth = function() { console.log('🐣') }
Being.prototype.death = function() { console.log('💀') }


function Animal(name, species, age, gender) {
    this.name = name
    Being.call(this, species, age)
    this.gender = gender
}

extend(Being, Animal)

Animal.prototype.pee = function() {
    console.log('💦')
}

Animal.prototype.poo = function() {
    console.log('💩')
}

Animal.prototype.fart = function() {
    console.log('💨')
}

var nemo = new Animal('Nemo', 'fish', 5, 'male')
//nemo.pee()

function Human(name, age, gender) {
    Animal.call(this, name, 'human', age, gender)
}

extend(Animal, Human)

Human.prototype.salute = function(name) {
    console.log(this.name + ': Hello, ' + name + '!')
}

var james = new Human('James', 34, 'male')
james.salute('Mary')
james.poo()

var mary = new Human('Mary', 28, 'female')
mary.salute('James')
mary.pee()

