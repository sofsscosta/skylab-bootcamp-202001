//console.dir(process.argv)

const {argv: [,, expression]} = process

console.log(eval(expression)) // WARN! eval should not be used
