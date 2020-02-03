describe("Murray.prototype.indexOf", function() {

  it("should return the first index at which a given element can be found", function() {
    var murray = new Murray(2, "py", 4, "js")
    expect(murray.indexOf("js")).toBe(3)
  })

  it("should return -1 if the element is not found", function() {
    var murray = new Murray(2, "py", 4, "js")
    expect(murray.indexOf("code")).toBe(-1)
  })

  it("should search from the index to start", function() {
    var murray = new Murray(2, "py", 4, "js")
    expect(murray.indexOf("js", 4)).toBe(-1)
  })

  it("should compare with triple-equals operator", function() {
    var murray = new Murray("1", "py", 4, "js")
    expect(murray.indexOf(1)).toBe(-1)
  })

  it("should keep the same values and length of the murray", function() {
    var murray = new Murray(3, 6, 9)
    murray.indexOf(2)
    murray.forEach(function(element, index) {
      expect(element).toBe((index + 1) * 3)
    })
  })
  
})