"use strict"

function concat() {
  if(!(arguments[0] instanceof Array)) throw new TypeError(arguments[0] + " is not an Array")
  
  var newArray = [];

  for (var i = 0; i < arguments.length; i++) {

    if (arguments[i] instanceof Array) {

      for (var j = 0; j < arguments[i].length; j++) {
        newArray[newArray.length] = arguments[i][j];
      }

    } else {
      newArray[newArray.length] = arguments[i];
    }

  }

  return newArray;
}
