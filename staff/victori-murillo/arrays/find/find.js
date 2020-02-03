"use strict";

function find(array, expression) {

  var foundElement;

  for (var i = 0; i < array.length; i++) {

    if (expression(array[i], i)) {
      foundElement = array[i];
      break;
    }
  }
  
  return foundElement;
}