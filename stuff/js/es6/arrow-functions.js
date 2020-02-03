window.name = 'Window'

const o = {
    name: 'Pepito',

    print() {
        console.log(this.name)
    }
}

//const print = function() { console.log(this.name.toUpperCase()) }
//const print = () => console.log(this.name.toUpperCase())
const print = function() { console.log(this.name.toUpperCase()) }.bind(this)

o.print = print

o.print()
// WINDOW