Murray.prototype.join = function(stringSeparator) {
  var separator = stringSeparator || ","

  if (typeof stringSeparator === "string" && stringSeparator.length === 0) {
    separator = ""
  }
  
  var string = ""

  if (this.length === 0) return string
  if (this.length === 1) return this[0]

  for (let i = 0; i < this.length; i++) {
    if (i === 0) {
      string = this[i]
    } else {
      string = string + separator + this[i]
    }
    
  }

  return string
}