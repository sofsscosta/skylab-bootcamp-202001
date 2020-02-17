Murray.prototype.push = function(value) {
  this[this.length] = value

  return ++this.length;
}