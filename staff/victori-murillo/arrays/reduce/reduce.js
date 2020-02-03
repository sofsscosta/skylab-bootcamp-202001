"use strict";

function reduce(array, expression, start = 0) {
  var total = start;
  var accumulator = 0;


  for (var i = 0; i < array.length; i++) {
    accumulator += array[i];
  }
  
  var sum = expression(accumulator, total);

  return sum;
}