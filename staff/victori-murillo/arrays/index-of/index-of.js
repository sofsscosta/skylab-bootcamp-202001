"use strict";

function indexOf(array, element) {

  var indexFound = -1;

  for (let i = 0; i < array.length; i++) {

    if (element === array[i]) {
      indexFound = i;
    }
    
  }
  return indexFound;
}
var a = [1, 2, 3]
console.log(indexOf(a, 3))