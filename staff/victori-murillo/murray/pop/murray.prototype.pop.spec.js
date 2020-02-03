describe("Murray.prototype.pop", function() {

  it("should return undefined is the murray is empty", function() {
    expect(new Murray().pop()).toBeUndefined()
  })

  it("should return the last element removed", function() {
    expect(new Murray(1, 2, 3).pop()).toBe(3)
  })

  it("should remove the last element in the murray", function() {
    var murray = new Murray(1, 2, 3)
    murray.pop()
    expect(murray[2]).toBeUndefined()
  })

  it("should change the length in -1", function() {
    var murray = new Murray(1, 2, "hi")
    murray.pop()
    expect(murray.length).toBe(2)
  })

})