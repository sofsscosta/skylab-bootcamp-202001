Murray.prototype.indexOf = function(toFind, start) {
  var start = start || 0
  for (let i = 0; i < this.length; i++) {

    if(this[i] === toFind && i >= start) {
      return i
    }
  }

  return -1
}