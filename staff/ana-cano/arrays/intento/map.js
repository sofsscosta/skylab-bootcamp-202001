 "use strict"

 var array = [5, 4, 5, 1, 4, 8]

 function map(array, expression) {
     var newArray = [];
     for (var i = 0; i < array.length; i++) {
         newArray[newArray.length] = expression(array[i]);

     }
     return newArray
 }


 function expression(element) {
     return element * 2

 }

 console.log(map(array, expression))