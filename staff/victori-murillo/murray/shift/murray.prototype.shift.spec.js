describe("Murray.prototype.shift", function() {

  it("should remove the first element from a murray", function() {
    var murray = new Murray(1, 2, 3)
    murray.shift()
    expect(murray[0]).toBe(2)
  })

  it("should return the first element removed", function() {
    expect(new Murray(1, 2, 3).shift()).toBe(1)
  })

  it("should change the length of the murray", function() {
    var murray = new Murray(1, 2, 3, 4, 5)
    murray.shift()
    expect(murray.length).toBe(4)
  })

  it("should return undefined is the murray is empty", function() {
    expect(new Murray().shift()).toBeUndefined()
  })

})