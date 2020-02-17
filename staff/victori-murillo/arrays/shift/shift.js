"use strict";

function shift(array) {
  if (array.length === 0) return undefined;

  var removed = array[0];

  for (var i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }

  array.length--;
  return removed;
}