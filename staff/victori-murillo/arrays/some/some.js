"use strict"

function some(array, expression) {
  if(!(expression instanceof Function)) throw new TypeError(expression + " is not a function");

  for (var i = 0; i < array.length; i++) {

    if (expression(array[i])) {
      return  true;
    }

  }
}