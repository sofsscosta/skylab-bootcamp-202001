Murray.prototype.splice = function(starts, remove) {
  var start = starts

  if (typeof start === "boolean" && start) start = 1
  if (typeof start === "boolean" && !start) start = 0
  if (typeof start === "undefined") start = 0
  if (typeof start !== "number") start = 0
  if (start < 0) start = 0

  if (typeof remove === "boolean" && remove) remove = 1
  if (typeof remove === "boolean" && !remove) remove = 0

  if (typeof remove !== "number") remove = 0
  if(typeof remove === "number" && !Number.isInteger(remove)) {
    remove = Math.floor(remove)
  }

  var elementsToAdd = new Murray

  if(arguments.length > 2) {
    for (let i = 2; i < arguments.length; i++) {
      elementsToAdd.push(arguments[i])
    }
  }


  var remove = remove

  if (arguments.length === 1 && typeof arguments[0] === "number") {
    remove = this.length - start < 0 ? 0 : this.length - start
    // console.log(remove)
  }

  if (starts < 0) {
    if(this.length + starts < 0) {
      start = 0
    } else {
      start = this.length + starts
    }
  }

  var firstHalf = this.slice(0, start > this.length ? this.length : start)
  var secondHalf = this.slice(start)

  var elementsRemoved = new Murray
  var count = 0
  
  var copySecond = secondHalf.map(function(element) {return element})

  if(remove > 0) {
    for (var i = 0; i < copySecond.length; i++) {

      if (count < remove) {
        elementsRemoved.push(copySecond[i])
        secondHalf.shift()
        count++
      }
    }
  }
  
  var concatened1 = firstHalf.concat(elementsToAdd)
  var concatened2 = concatened1.concat(secondHalf)

  var length = this.length

  for (let i = 0; i < length; i++) {
    this.shift()
  }

  for (let i = 0; i < concatened2.length; i++) {
    this.push(concatened2[i])
  }

  if (arguments.length == 0 || arguments[1] === 0) return new Murray()

  return elementsRemoved
}