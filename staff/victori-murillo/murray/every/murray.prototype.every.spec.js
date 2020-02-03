describe("Murray.prototype.every", function() {

  it("should return a boolean", function() {
    var murray = new Murray(1, 2, 3)
    var filtered = murray.every(function(element) {return element > 1})
    expect(typeof filtered).toBe("boolean")
  })

  it("should keep the same element in the murray", function() {
    var murray = new Murray(1, 2, 3)
    murray.every(function(element) {return element})

    murray.forEach(function(element, index) {
      expect(element).toBe(index + 1)
    })
  })

  it("should return true if every element is true => (num > 7)", function() {
    var murray = new Murray(8, 9, 10)

    var result = murray.every(function(element) {return (element > 7)})
    expect(result).toBe(true)
  })

  it("should return false if at least one element doesnt't pass the test implement", function() {
    var murray = new Murray
    expect(murray.every(function(element) {return element > 2})).toBe(false)
  })

  it("should failt if not is a function as a second argument", function() {

    expect(function() {
      new Murray().every()
    }).toThrowError(TypeError, "undefined is not a function")

    expect(function() {
      new Murray().every({})
    }).toThrowError(TypeError, "[object Object] is not a function")

    expect(function() {
      new Murray().every([])
    }).toThrowError(TypeError, "Array is not a function")

    expect(function() {
      new Murray().every("aa")
    }).toThrowError(TypeError, "aa is not a function")

    expect(function() {
      new Murray().every(1)
    }).toThrowError(TypeError, "1 is not a function")

    expect(function() {
      new Murray().every(true)
    }).toThrowError(TypeError, "true is not a function")
  })
})