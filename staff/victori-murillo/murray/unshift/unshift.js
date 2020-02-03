Murray.prototype.unshift = function() {

  var lengthArgs = arguments.length
  var copyThis = this.map(function(element) {return element})
  
  for (let i = 0; i < lengthArgs; i++) {
    this[i] = arguments[i]
  }

  for (let i = 0; i < copyThis.length; i++) {
    this[this.length] = copyThis[i]
  }

  this.length = lengthArgs + copyThis.length
  return this.length
}