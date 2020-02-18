require('./array.prototype.shuffle')

const { argv: [, , ...nums] } = process

console.log(nums.shuffle())
