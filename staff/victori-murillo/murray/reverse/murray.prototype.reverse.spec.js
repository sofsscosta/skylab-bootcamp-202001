describe("Murray.prototype.reverse", function() {

  it("should return an murray", function() {
    var murray = new Murray(1, 2, 3)
    murray.reverse()

    expect(murray).toBeInstanceOf(Murray)
  })

  it("should return the same reversed murray", function() {
    var murray = new Murray("js", 12, "test", 3, "code", 44, 23)
    var copy = murray.map(function(element) {return element})
    murray.reverse()

    murray.forEach(function(element, index) {
      expect(element).toBe(copy[murray.length - (1 + index)])
    })
  })

  it("should keep the same length", function() {
    var murray = new Murray(1, 2, 3).reverse()
    expect(murray.length).toBe(3)
  })

})