"use strict";

console.log("TEST forEach");

//1
var message = 'should fail on non-function expression';
console.log(message);


try {
  var array = [1, 2];
  forEach(array);
  
} catch (error) {
  _error = error;

} finally {
  console.assert(_error instanceof TypeError, 'should error be of type TypeError');
  console.assert(_error.message === "undefined is not a function", 'should fail with message "undefined is not a function"');
}

var _error;
try {
  var array = [1, 2];
  forEach(array, "a");
  
} catch (error) {
  _error = error;

} finally {
  console.assert(_error instanceof TypeError, 'should error be of type TypeError');
  console.assert(_error.message === "a is not a function", 'should fail with message "a is not a function"');
}

var _error;
try {
  var array = [1, 2];
  forEach(array, 9);
  
} catch (error) {
  _error = error;

} finally {
  console.assert(_error instanceof TypeError, 'should error be of type TypeError');
  console.assert(_error.message === "9 is not a function", 'should fail with message "9 is not a function"');
}

var _error;
try {
  var array = [1, 2];
  forEach(array, true);
  
} catch (error) {
  _error = error;

} finally {
  console.assert(_error instanceof TypeError, 'should error be of type TypeError');
  console.assert(_error.message === "true is not a function", 'should fail with message "true is not a function"');
}

var _error;
try {
  var array = [1, 2, 3];
  forEach(array, {});
  
} catch (error) {
  _error = error;

} finally {
  console.assert(_error instanceof TypeError, 'should error be of type TypeError');
  console.assert(_error.message === "[object Object] is not a function", 'should fail with message "[object Object] is not a function"');
}