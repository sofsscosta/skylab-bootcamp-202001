describe("Murray.prototype.join", function() {

  it("should return a string", function() {
    var murray = new Murray(1, 2)
    expect(murray.join()).toBe("1,2") 
  })

  it("should concatenate all of the elements in a murray", function() {
    var murray = new Murray("h", "i", 5)
    expect(murray.join("")).toBe("hi5") 
  })

  it("should separated by commas if the argument is empty", function() {
    var murray = new Murray("a", "b", "c")
    expect(murray.join()).toBe("a,b,c") 
  })

  it("should return the first element without using separator if there is one element", function() {
    var murray = new Murray("a")
    expect(murray.join()).toBe("a") 
  })

  it("should return string empty if the murray is empty", function() {
    var murray = new Murray
    expect(murray.join()).toBe("") 
  })

})