Murray.prototype.filter = function(expression) {
  if (expression instanceof Array) throw new TypeError(expression.constructor.name + ' is not a function');

  if (!(expression instanceof Function)) throw new TypeError(expression + ' is not a function');

  

  var filtered = new Murray

  for (let i = 0; i < this.length; i++) {
    if (expression(this[i], i, this)) {
      filtered.push(this[i])
    }
    
  }

  return filtered

}