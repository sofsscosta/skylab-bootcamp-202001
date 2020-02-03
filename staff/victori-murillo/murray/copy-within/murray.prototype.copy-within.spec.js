describe("Murray.prototype.copyWithin", function() {

  it("should return the murray modified and keep the length", function() {
    var murray = new Murray("a", "b", "c")
    murray.copyWithin(1)
    expect(murray).toBeInstanceOf(Murray)
    expect(murray.length).toBe(3)
  })

  it("should copy the element in index 3 to index 0", function() {
    var murray = new Murray("a", "b", "c", "d")
    murray.copyWithin(1, 3, 4)
    expect(murray).toBeInstanceOf(Murray)
    expect(murray[0]).toBe("a")
    expect(murray[1]).toBe("d")
    expect(murray[2]).toBe("c")
    expect(murray[3]).toBe("d")
    expect(murray.length).toBe(4)
  })

  it("should copy the elements from the index 1 to forward to index 0", function() {
    var murray = new Murray("a", "b", "c")
    murray.copyWithin(0, 1)
    expect(murray).toBeInstanceOf(Murray)
    expect(murray.length).toBe(3)
    expect(murray[0]).toBe("a")
  })

  it("should not exchange elements cause the first argument is more o equal to the length murray", function() {
    var murray = new Murray("a", "b", "c")
    murray.copyWithin(3, 1, 2)
    expect(murray).toBeInstanceOf(Murray)
    expect(murray.length).toBe(3)
    expect(murray[0]).toBe("a")
    expect(murray[0]).toBe("b")
    expect(murray[0]).toBe("c")
  })

  it("should put the first element in the index 0 in the last index of murray", function() {})
})