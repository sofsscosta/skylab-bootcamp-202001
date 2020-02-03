"use strict";

// function reverse(array) {
//   var temp = [];

//   for (var i = 0; i < array.length; i++) {
//     temp[i] = array[i];
//   }

//   for (var i = 0; i < temp.length; i++) {
//     array[i] = temp[temp.length - (1+i)];
//   }

//   return array;
// }

//2
function reverse(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    newArray[i] = array[array.length - (i + 1)];
  }

  array = newArray;
  return array;
}