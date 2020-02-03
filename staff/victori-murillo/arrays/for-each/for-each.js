"use strict"

function forEach(array, expression) {
  if (!(array instanceof Array)) throw new TypeError(array + " is not an Array");

  if (!(expression instanceof Function)) throw new TypeError(expression + " is not a function");
  
  for (var index = 0; index < array.length; index++) {
    expression(array[index], index, array);
  } 
}

// forEach(1, function() {} )
