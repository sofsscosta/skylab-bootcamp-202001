"use strict";

function unshift(array) {
  var temporal = [];

  for (var i = 0; i < array.length; i++) {
    temporal[i] = array[i];
  }

  for (var i = 1; i < arguments.length; i++) {
    array[i - 1] = arguments[i];
  }

  for (var i = arguments.length -1; i < temporal.length + arguments.length -1; i++) {
    array[i] = temporal[i - (arguments.length -1)];
  }

  return array.length;
}