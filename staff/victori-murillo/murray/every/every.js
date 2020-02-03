Murray.prototype.every = function(expression) {
  if (expression instanceof Array) throw new TypeError(expression.constructor.name + " is not a function")
  if (!(expression instanceof Function)) throw new TypeError(expression + " is not a function")
  
  var count = 0
  var result = false

  for (let i = 0; i < this.length; i++) {
    if (expression(this[i], i, this)) {
      count++
    }
  }

  if(count === this.length && count > 0) result = true

  return result
}