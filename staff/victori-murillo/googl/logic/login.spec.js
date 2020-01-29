describe("login", function() {

  it("should fail on none string as first or second parameter", function() {
    expect(function() {
      login(undefined, "")
    }).toThrowError(TypeError, "undefined is not a string")

    expect(function() {
      login([], "")
    }).toThrowError(TypeError, "Array is not a string")

    expect(function() {
      login({}, "")
    }).toThrowError(TypeError, "[object Object] is not a string")

    expect(function() {
      login(true, "")
    }).toThrowError(TypeError, "true is not a string")

    expect(function() {
      login(5, "")
    }).toThrowError(TypeError, "5 is not a string")
  })


})