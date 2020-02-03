Murray.prototype.flat = function(deepLevel) {
  var deepLevel = deepLevel || 1;
  var newMurray = new Murray

  for (var i = 0; i < this.length; i++) {
    var subArray = this[i]

    if (this[i] instanceof Murray) {
      if(deepLevel > 0)
        subArray = subArray.flat(deepLevel - 1)

      for (var j = 0; j < subArray.length; j++)
        newMurray.push(subArray[j])
      
    } else {
      newMurray.push(this[i])
    }
  }
  return newMurray
}