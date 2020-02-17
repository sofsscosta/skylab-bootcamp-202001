// 1 parameter --> high order function name
// 2 parameter --> function with asserts inside
describe('forEach', function() {

  // 1 (happy path)
  it("should return always undefined", function() {
    var array = [1, 2, 3];
    
    assert(forEach(array, function(element) {return element}) === undefined, "should return undefined")
  });

  // 2 (happy path)
  it("should add 10 to each number in the same array", function() {

    var array = [1, 2, 3];
    forEach(array, function(number, i) {array[i] = number + 10});

    array.forEach(function(number, index) {
      assert(number === index + 1 + 10, 'should value in index ' + index + " should be a number: " + index + 1 + 10 + "but got " + number)
    });
  })

  //3 (happy path and test errors)
  it('should fail on non-array as first argument', function() {

    (function() {
      var _error;
  
      try {
        forEach(1, function(){})
      } catch (error) {
        _error = error;
      }
  
      assert(_error instanceof TypeError, "should error be of type TypeError")
      assert(_error.message === "1 is not an Array", 'should fail with the message "1 is not an Array"');
    })();

    (function() {
      var _error;

      try {
        forEach("string", function() {})
      } catch (error) {
        _error = error;
      }

      assert(_error instanceof TypeError, "should error be of type TypeError");
      assert(_error.message === "string is not an Array", 'should fail with the message "string is not an Array"')
    })();

    (function() {
      var _error;

      try {
        forEach(true, function() {})
      } catch (error) {
        _error = error;
      }

      assert(_error instanceof TypeError, "should be error type: TypeError");
      assert(_error.message === "true is not an Array", 'should fail with the message "true is not an Array"');
    })();

  });

  //4 (happy path and test errors)
  it('should fail on non-function expression', function() {

    (function() {
      var _error;
  
      try {
        forEach([1, 2])
  
      } catch (error) {
        _error = error;
      }
  
      assert(_error instanceof TypeError, 'should error be of type TypeError, but got ' + _error);
      assert(_error.message === "undefined is not a function", 'should fail with message "undefined is not a function"');
    })();

    (function() {
      var _error;

      try {
        forEach([1, 2], "a")
      } catch (error) {
        _error = error;
      }

      assert(_error instanceof TypeError, 'should error be of type TypeError, but got ' + _error);
      assert(_error.message === "a is not a function", 'should fail with message "a is not a function"');

    })();

    (function() {
      var _error;

      try {
        forEach([1, 2], 9);

      } catch (error) {
        _error = error;
      }

      assert(_error instanceof TypeError, "should error be of type TypeError, but got " + _error);
      assert(_error.message === "9 is not a function", 'should fail with message "a is not a function"');

    })();


    (function() {
      var _error;

      try {
        forEach([1, 2], true);

      } catch (error) {
        _error = error;
      }

      assert(_error instanceof TypeError, "should error be of type TypeError, but got " + _error);
      assert(_error.message === "true is not a function", 'should fail with message "true is not a function"');
    })();


    (function() {
      var _error;
      
      try {
        forEach([1, 2], {})

      } catch (error) {
        _error = error;
      }

      assert(_error instanceof TypeError, "should error be of type TypeError, but got " + _error);
      assert(_error.message === "[object Object] is not a function", 'should fail with message "[object Object] is not a function"')
    })();
    
  })


  



});