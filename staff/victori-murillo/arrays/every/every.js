"use strict";

function every(array, expression) {
  if(!(expression instanceof Function)) throw new TypeError(expression + " is not a function");
  
  var count = 0;

  for (var i = 0; i < array.length; i++) {
    if (expression(array[i], i)) {
      count += 1;
    }
  }

  if (count === array.length) {
    return true;
  }
  
  return false;
}