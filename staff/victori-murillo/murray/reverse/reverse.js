Murray.prototype.reverse = function() {
  var newMurray = new Murray

  for (var i = 0; i < this.length; i++) {
    newMurray.push(this[i])
  }

  for (var i = 0; i < this.length; i++) {
    this[i] = newMurray[(newMurray.length - 1) - i]
  }


  return this
}