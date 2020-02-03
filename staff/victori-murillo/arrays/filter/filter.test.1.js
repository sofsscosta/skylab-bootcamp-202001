console.log("TEST filter");

//1
var message = "should return an array"
console.log(message)
var array = [1, 2, 3, 4]
console.assert( filter(array, function(ele) {return ele > 1}) instanceof Array, message )


//2
var message = "should the length array be the same";
console.log(message);

var array = [1, 2, 3, 4], temporal = [];
for (var i = 0; i < array.length; i++) temporal[i] = array[i];

filter(array, function(element) {return element > 2});
console.assert(temporal.length === array.length, message);


//2
var message = "should the elements in array be the same";
console.log(message);
var array = [1, 2, 3], temporal = [];

for (var i = 0; i < array.length; i++) temporal[i] = array[i];
filter(array, function(number) {return number === 1});

temporal.forEach(function(element, index) {
  console.assert(element === array[index], message);
});

