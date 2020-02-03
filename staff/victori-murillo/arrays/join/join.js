"use strict";

function join(array, separator = '') {
  var string = "";

  for (var i = 0; i < array.length; i++) {
    if (i === 0) {
      string += array[i];
    } else {
      string += separator + array[i];
    }
  }

  return string;
}