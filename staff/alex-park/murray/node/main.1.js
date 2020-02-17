//console.dir(process.argv)

const {argv: [,, ...nums]} = process

const result = nums.reduce((accum, value) => accum + Number(value), 0)

console.log(result)  
