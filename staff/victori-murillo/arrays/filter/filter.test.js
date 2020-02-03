describe("filter", function() {
  it("should return an array", function() {
    assert( filter([1], function(element) {return element > 1}) instanceof Array, "should return an array");
  });

  it("should the length array be the same", function() {
    var array = [1, 2, 3, 4], temporal = [];
    for (var i = 0; i < array.length; i++) {temporal[i] = array[i]}

    filter(array, function(element) {return element > 2});
    assert(temporal.length === array.length, "should the length array be the same")
  });

  it("should the elements in array be the same", function () {
    
    var array = [1, 2, 3], temporal = [];

    for (var i = 0; i < array.length; i++) temporal[i] = array[i];
    filter(array, function(number) {return number === 1});

    temporal.forEach(function(element, index) {
      assert(element === array[index], "should the elements in array be the same");
    });

  });

  it("should fail is not a function as second argument", function() {
    
    (function() {
      var _error;

      try {
        filter([]);
      } catch (error) {
        _error = error;
      }

      assert(_error instanceof TypeError, "should be an Error: TypeError, but got " + _error);
      assert(_error.message === "undefined is not a function", 'should show message "undefined is not a function');
    })();

    (function() {
      var _error;

      try {
        filter([], 1)
      } catch (error) {
        _error = error;
      }

      assert(_error instanceof TypeError, "should be an Error: TypeError, but got " + _error);
      assert(_error.message === "1 is not a function", 'should show message "1 is not a function"');
    })();

    (function () {
      var _error;

      try {
        filter([], false)
      } catch (error) {
        _error = error;
      }

      assert(_error instanceof TypeError, "should be an Error: TypeError, but got " + _error);
      assert(_error.message === "false is not a function", 'should show message: "false is not a function"')
    })();
    
    (function() {
      var _error;

      try {
        filter([1, 2], {});

      } catch (error) {
        _error = error;
      }

      assert(_error instanceof TypeError, "should be an Error: TypeError, but got " + _error);
      assert(_error.message === "[object Object] is not a function", 'should show message, "[object, Object] is not a function')
    })();


  });
});












