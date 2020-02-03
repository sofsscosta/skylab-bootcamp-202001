Murray.prototype.some = function(expression) {
  if (expression instanceof Array) throw new TypeError(expression.constructor.name + " is not a function")
  if (!(typeof expression === 'function')) throw new TypeError(expression + " is not a function")

  for (let i = 0; i < this.length; i++) {
    if (expression(this[i], i, this)) {
      return true
    }
  }

  return false
}