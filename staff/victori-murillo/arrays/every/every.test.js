describe("every", function () {
  it("should return a boolean", function () {
    assert(typeof every([1, 2], function (element) { return element > 2 }) === "boolean", "should return a boolean");
  });

  it("should keep the same element in the array", function () {

    var array = [2, 4, 8];
    var template = [];

    for (var i = 0; i < array.length; i++) { template[i] = array[i] }

    every(array, function (number) { return number % 2 === 0 })

    template.forEach(function (element, index) {
      assert(element === array[index], "should keep the same element in the array");
    })
  });

  it("should return true if every element is true => (num > 7)", function () {
    assert(every([8, 9], function (num) {
      return num > 7;
    }) === true, "should return true if every element is true => (num > 7)");
  });

  it("should return false if at least one element doesnt't pass the test implement", function () {
    var array = ["hola", "hi", "hallo"];

    assert(every(array, function (element) { return element.length > 3 }) === false,
      "should return false if at least one element doesnt't pass the test implement");
  });

  it("should failt if not is a function as a second argument", function () {

    (function() {
      var _error;

      try {
        every([1, 2])
      } catch (error) {
        _error = error;
      }

      assert(_error instanceof TypeError, "should be an Error: TypeError, but got " +  _error);
      assert(_error.message === "undefined is not a function", 'should show in message "undefined is not a function"');
    })();
    
    (function() {
      var _error;

      try {
        every([1, 2], 7)
        
      } catch (error) {
        _error = error;
      }

      assert(_error instanceof TypeError, "should be an Error: TypeError, but got " + _error);
      assert(_error.message === "7 is not a function", 'should show in message "7 is not a function"');
    })();

    (function() {
      var _error;

      try {
        every([], true)
      } catch (error) {
        _error = error;
      }

      assert(_error instanceof TypeError, "shoud be an Error: TypeError, but got " + _error);
      assert(_error.message === "true is not a function", 'should show in message "true is not a function"');
    })();

    (function () {
      var _error;

      try {
        every([1, 2], {})
      } catch (error) {
        _error = error;
      }

      assert(_error instanceof TypeError, "shoud be an Error: TypeError, but got " + _error);
      assert(_error.message === "[object Object] is not a function", 'should show in message "[object Object] is not a function"');
    })();
  });


});