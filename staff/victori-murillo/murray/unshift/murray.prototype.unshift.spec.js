describe("Murray.prototype.unshift", function() {

  it("should return a new length of murray", function() {
    var murray = new Murray(1, "js")
    expect(murray.unshift("py")).toBe(3)
  })

  it("should add 1 or more elements to the beginning of a murray", function() {
    var murray = new Murray(1, 2)
    murray.unshift("js")
    expect(murray[0]).toBe("js")
  })

  it("should modify the same murray", function() {
    var murray = new Murray(1, 2, "a", "b")
    var length = murray.length
    expect(murray.unshift("c")).not.toBe(length)
  })

})