Murray.prototype.map = function(expression) {
  if (expression instanceof Array) throw new TypeError(expression.constructor.name + " is not a function")
  if (!(typeof expression === "function")) throw new TypeError(expression + " is not a function")

  var murray = new Murray

  for (let i = 0; i < this.length; i++) {
    murray.push(expression(this[i], i, this))
  }

  return murray
}