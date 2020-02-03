Murray.prototype.shift = function() {
  
  if (this.length === 0) return undefined;
  var removed = this[0]

  for (var i = 0; i < this.length; i++) {
    this[i] = this[i + 1]
  }

  this.pop()
  return removed
}