Murray.prototype.pop = function() {

  var lastElement = undefined;

  if (this.length > 0) {
    lastElement = this[this.length - 1]
    delete this[this.length - 1]
    this.length--
  }

  return lastElement
}