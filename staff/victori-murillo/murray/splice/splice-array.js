function splice(array, start=0, remove=0) {

  var elementsToAdd = [];

  for (let i = 3; i < arguments.length; i++) {
    elementsToAdd.push(arguments[i])
  }

  var firstHalf = array.slice(0, start)
  var secondHalf = array.slice(start)

  if(remove > 0) {
    for (let i = 0; i < remove; i++) {
      secondHalf.shift()
    }
  }

  var y = firstHalf.concat(elementsToAdd, secondHalf)

  for (let i = 0; i < array.length; i++) {
    array.pop()
  }

  for (let i = 0; i < y.length; i++) {
    array[i] = y[i]
  }
}


var array = [1, 2, 3, 4]
splice(array, 0, 1)
console.log(array)
