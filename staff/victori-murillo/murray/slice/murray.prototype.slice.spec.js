describe("Murray.prototype.slice", function() {

  it("should return a new murray", function() {
    var murray = new Murray(1, 2, 3)
    expect(murray.slice(5)).toBeInstanceOf(Murray)
  })

  it("should the original murray will not be modified", function() {
    var murray = new Murray(1, 2, 3, 4)
    murray.slice(1)
    murray.forEach(function(element, index) {
      expect(element).toBe(index + 1)
    })
  })

  it("should cut the murray from the first until the second argument", function() {
    var murray = new Murray(1, 2, 3, 4)
    var newMurray = murray.slice(2, 3)
    expect(newMurray[0]).toBe(3)
  })

  it("should cut the murray from the first until the second argument", function() {
    var murray = new Murray(1, 2, 3, 22)
    var newMurray = murray.slice(-1)
    expect(newMurray[0]).toBe(22)
  })

  it("should cut the murray using negative arguments", function() {
    var murray = new Murray('ant', 'bison', 'camel', 'duck', 'elephant')
    var newMurray = murray.slice(-5, -2)
    expect(newMurray[0]).toBe("ant", "bison", "camel")
  })
})