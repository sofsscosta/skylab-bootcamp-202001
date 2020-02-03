describe("Murray.prototype.find", function() {

  it("should return a value of first element matches found", function() {
    var murray = new Murray(1, 2, 3)
    var result = murray.find(function(element) {return element > 2})
    expect(result).toBe(3)
  })

  it("should return undefined if not match", function() {
    var murray = new Murray(7, 2, 5)
    var result = murray.find(function(element) {return element > 10})
    expect(result).toBeUndefined()
  })

  it("should does not change the actual murray", function() {
    var murray = new Murray(1, 2, 3)
    murray.find(function(element) {return element > 1})
    murray.forEach(function(element, index) {
      expect(element).toBe(index + 1)
    })
  })

  it("should return the element 7", function() {
    var murray = new Murray(7, 2, 5)
    var result = murray.find(function(element) {return element === 7})
    expect(result).toBe(7)
  })

  it("should keep the same array length", function() {
    var murray = new Murray("hi", "hello", "hallo")
    murray.find(function(element) {return element > 10})
    expect(murray.length).toBe(3)
  })

  it("should fail on non-function expression", function() {

    expect(function() {
      new Murray(1, 2, 3).find()
    }).toThrowError(TypeError, "undefined is not a function")

    expect(function() {
      new Murray(1, 2, 3).find({})
    }).toThrowError(TypeError, "[object Object] is not a function")

    expect(function() {
      new Murray(1, 2, 3).find([])
    }).toThrowError(TypeError, "Array is not a function")

    expect(function() {
      new Murray(1, 2, 3).find("string")
    }).toThrowError(TypeError, "string is not a function")

    expect(function() {
      new Murray(1, 2, 3).find(9)
    }).toThrowError(TypeError, "9 is not a function")

    expect(function() {
      new Murray(1, 2, 3).find(false)
    }).toThrowError(TypeError, "false is not a function")

  })
})