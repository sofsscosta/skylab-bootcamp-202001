const calculate = require('./calculate')
//import calculate from './calculate'

const {argv: [,, expression]} = process

console.log(calculate(expression))
