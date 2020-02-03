"use strict";

function flat(array, deepLevel) {
  var deepLevel = deepLevel || 1;
  var newArray = [];

  for (let i = 0; i < array.length; i++) {
    var subArray = array[i];

    if (subArray instanceof Array) {

      if (deepLevel > 1) subArray = flat(subArray, deepLevel - 1)
      
      for (let j = 0; j < subArray.length; j++) {
        newArray[newArray.length] = subArray[j];
      }
    } else {
      newArray[newArray.length] = array[i];
    }
  }
  return newArray
}

var a = [1, 2, [3, [4, [5]]]]
console.log(flat(a, 3))