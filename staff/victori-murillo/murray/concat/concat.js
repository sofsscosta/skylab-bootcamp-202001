Murray.prototype.concat = function() {

  var newMurray = new Murray

  for (let i = 0; i < this.length; i++) {
    newMurray.push(this[i])
  }

  for (let i = 0; i < arguments.length; i++) {

    if(arguments[i] instanceof Murray) {
      for (let j = 0; j < arguments[i].length; j++) {
        newMurray.push(arguments[i][j])
      }

    } else {
      newMurray.push(arguments[i])
    }
  }

  return newMurray
}