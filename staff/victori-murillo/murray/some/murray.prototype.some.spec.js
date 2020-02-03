describe("Murray.prototype.some", function() {

  it("should return a boolean", function() {
    var murray = new Murray(1, 2, 3, 4)
    var result = murray.some(function(element) {return element > 5})
    expect(result).toBe(false)
  })
  
  it("should return true if at least one element in the murray passes the test implemented", function() {
    var murray = new Murray(1, "js")
    var result = murray.some(function(element) {return element === "js"})
    expect(result).toBe(true)
  })

  it("should keep the same values in the murray", function() {
    var murray = new Murray(1, 2, 3)
    murray.some(function(element) {return element > 5})
    murray.forEach(function(element, index) {
      expect(element).toBe(index + 1)
    })
  })

  it("should keep the same length in the murray", function() {
    var murray = new Murray("hi", "hello")
    murray.some(function(element) {return element.length > 1})
    expect(murray.length).toBe(2)
  })

  it("should return false if the murray is empty", function() {
    var murray = new Murray
    var result = murray.some(function(element) {return element.length > 1})
    expect(result).toBe(false)
  })

  it("should fail on non-function expression", function() {

    expect(function() {
      new Murray(1, 2, 3).some()
    }).toThrowError(TypeError, "undefined is not a function")

    expect(function() {
      new Murray(1, 2, 3).some({})
    }).toThrowError(TypeError, "[object Object] is not a function")

    expect(function() {
      new Murray(1, 2, 3).some([])
    }).toThrowError(TypeError, "Array is not a function")

    expect(function() {
      new Murray(1, 2, 3).some("string")
    }).toThrowError(TypeError, "string is not a function")

    expect(function() {
      new Murray(1, 2, 3).some(9)
    }).toThrowError(TypeError, "9 is not a function")

    expect(function() {
      new Murray(1, 2, 3).some(false)
    }).toThrowError(TypeError, "false is not a function")
  })

})