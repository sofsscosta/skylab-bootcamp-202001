"use strict";

function flat(array, deepLevel = 1) {
  var newArray = [];
  var depthTemp = deepLevel

  for (let i = 0; i < array.length; i++) {
    
    if (array[i] instanceof Array) {

      var subArray = array[i];

      do {

        if (newArray[newArray.length -1] instanceof Array && deepLevel > 1) {
          subArray = newArray[newArray.length - 1]
          deepLevel -= 1
        } else {
          deepLevel = depthTemp
        }

        for (let j = 0; j < subArray.length; j++) {
           newArray[newArray.length] = subArray[j];
        }

        
      } while (deepLevel > 1);

    } else {
      newArray[newArray.length] = array[i]
    }
    
  }

  return newArray
}

var a = [1, 2, [3, [4, [5]]]]
console.log(flat(a, 1))