describe("Murray.prototype.filter", function() {

  it("should return an Murray", function() {
    var murray = new Murray(1, 2)
    var filtered = murray.filter(function(element) {return element > 1})
    expect(filtered).toBeInstanceOf(Murray)
  })

  it("should the murray length be the same", function() {
    var murray = new Murray(1, 2)
    murray.filter(function(element) {return element > 1})
    expect(murray.length).toBe(2)
  })

  it("should the elements in the murray be the same", function() {
    var murray = new Murray(1, 2)
    murray.filter(function(element) {return element > 2})

    murray.forEach(function(element, index) {
      expect(element).toBe(index + 1)
    })
  })

  it("should fail on non-function expression", function() {

    expect(function() {
      new Murray(1, 2, 3).filter()
    }).toThrowError(TypeError, "undefined is not a function")

    expect(function() {
      new Murray(1, 2, 3).filter({})
    }).toThrowError(TypeError, "[object Object] is not a function")

    expect(function() {
      new Murray(1, 2, 3).filter([])
    }).toThrowError(TypeError, "Array is not a function")

    expect(function() {
      new Murray(1, 2, 3).filter("string")
    }).toThrowError(TypeError, "string is not a function")

    expect(function() {
      new Murray(1, 2, 3).filter(9)
    }).toThrowError(TypeError, "9 is not a function")

    expect(function() {
      new Murray(1, 2, 3).filter(false)
    }).toThrowError(TypeError, "false is not a function")

  })
})


/*

describe("filter", function() {


  it("should fail is not a function as second argument", function() {



  });
});














*/