Murray.prototype.forEach = function(expression) {
  if (expression instanceof Array) throw new TypeError(expression.constructor.name + ' is not a function');

  if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function');

  for (let i = 0; i < this.length; i++) {
    expression(this[i], i, this)
  }
}