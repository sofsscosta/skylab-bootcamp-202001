describe("Murray.prototype.map", function() {

  it("should return a new murray", function() {
    var murray = new Murray(1, 2, 3)
    var newMurray = murray.map(function(element) {return element})

    expect(newMurray).toBeInstanceOf(Murray)
  })

  it("Should does not change the existing murray", function() {
    var murray = new Murray(2, 4, 6, 8)
    murray.map(function(element) {return element * 10})

    murray.forEach(function(element, index) {
      expect(element).toBe((index + 1) * 2)
    })
  })

  it("should return a murray be modified adding 10 to each value", function() {
    var murray = new Murray(1, 2, 3)
    var newMurray = murray.map(function(element) {
      return element + 10
    })

    newMurray.forEach(function(element, index) {
      expect(element).toBe(index + 1 + 10)
    })
  })

  it("should return an array be modified multiply by the same value", function() {
    var murray = new Murray(5, 22, 7)
    var newMurray = murray.map(function(element) {
      return element * element
    })

    newMurray.forEach(function(element, index) {
      expect(element).toBe(murray[index] * murray[index])
    })
  })

  it("should fail on non-function expression", function() {

    expect(function() {
      new Murray(1, 2, 3).map()
    }).toThrowError(TypeError, "undefined is not a function")

    expect(function() {
      new Murray(1, 2, 3).map({})
    }).toThrowError(TypeError, "[object Object] is not a function")

    expect(function() {
      new Murray(1, 2, 3).map([])
    }).toThrowError(TypeError, "Array is not a function")

    expect(function() {
      new Murray(1, 2, 3).map("string")
    }).toThrowError(TypeError, "string is not a function")

    expect(function() {
      new Murray(1, 2, 3).map(9)
    }).toThrowError(TypeError, "9 is not a function")

    expect(function() {
      new Murray(1, 2, 3).map(false)
    }).toThrowError(TypeError, "false is not a function")
  })
  
})