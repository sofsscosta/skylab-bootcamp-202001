describe("some", function() {
  it("should return a boolean", function() {
    var array = [1, 2, 3];
    assert(typeof some(array, function(element) {return element === 1}) === "boolean", "should return a boolean")
  });

  it("should at least one number more than 4", function() {
    var array = [5, 2, 1];
    assert(some(array, function(number) {return number > 4}) === true, "should at least one number more than 4")
  });

  it("should at least one element be a string", function () {
    var array = ["code", "js", "array"];
    assert(some(array, function(element) {return typeof element === "string"}), "should at least one element be a string");
  })

  it("should fail if the second parameter is not a function", function () {

    (function() {
      var _error;

      try {
        some([1, 2, 3], 9)
      } catch (error) {
        _error = error;
      }

      assert(_error instanceof TypeError, "should be an error: TypeError, but got " + _error);
      assert(_error.message === "9 is not a function", 'should show the message: "9 is not a function"')
    })();

    (function() {
      var _error;

      try {
        some([1, 2], {})
      } catch (error) {
        _error = error;
      }

      assert(_error instanceof TypeError, "should be an error: TypeError, but got ", + _error);
      assert(_error.message === "[object Object] is not a function", 'should show the message: "[object Object] is not a function"');
    })();

    
    
  });

})
