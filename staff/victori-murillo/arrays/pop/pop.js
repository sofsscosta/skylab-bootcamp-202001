"use strict";

function pop(array) {
  var lastElement = array[array.length - 1];
  array.length--;
  return lastElement;
}