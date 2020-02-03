describe("Murray.prototype.flat", function() {

  it("should return a murray", function() {
    var murray = new Murray(1, 2)
    murray.push(new Murray(3, 4))
    var concatened = murray.flat()

    expect(concatened).toBeInstanceOf(Murray)
    expect(concatened.length).toBe(4)
  })

  it("should be 1 level of deep as default value in the first parameter", function() {
    var murray = new Murray(1, 2)
    murray.push(new Murray(3, 4))
    var concatened = murray.flat()
    
    concatened.forEach(function(element, index) {
      expect(element).toBe(index + 1)
    })
    expect(concatened.length).toBe(4)
  })

  it("should accept more levels of deep depends the number in the first argument", function() {
    var murray1 = new Murray(1, 2)
    var murray2 = new Murray(3, 4)
    murray2.push(new Murray(5, 6))
    murray1.push(murray2)

    var concatened = murray1.flat(2)
    
    concatened.forEach(function(element, index) {
      expect(element).toBe(index + 1)
    })
    expect(concatened.length).toBe(6)
  })

  it("should return an murray with all element in first level with infinity parameter", function() {
    var murray1 = new Murray(1, 2)
    var murray2 = new Murray(3, 4)
    var murray3 = new Murray(5, 6)
    var murray4 = new Murray(7, 8)
    var murray5 = new Murray(9, 10)
    murray5.push(new Murray(11, 12))
    murray4.push(murray5)
    murray3.push(murray4)
    murray2.push(murray3)
    murray1.push(murray2)

    var concatened = murray1.flat(Infinity)
    
    concatened.forEach(function(element, index) {
      expect(element).toBe(index + 1)
    })
    expect(concatened.length).toBe(12)
  })

  it("should concaten recursively three murrays inside in deepth", function() {
    var murray1 = new Murray(2, 4)
    var murray2 = new Murray(6, 8)
    var murray3 = new Murray(10, 12)
    murray3.push(new Murray(14, 16))
    murray2.push(murray3)
    murray1.push(murray2)

    var concatened = murray1.flat(3)
    
    concatened.forEach(function(element, index) {
      expect(element).toBe((index + 1) * 2)
    })

    expect(concatened.length).toBe(8)
  })

  it("should fail if create an instance with new murray instead new Murray", function() {
    expect(function() {
      new murray(2, 4).flat()
    }).toThrowError(ReferenceError, "murray is not defined")
  })

  it("should fail if pass a variable not defined", function() {
    expect(function() {
      new Murray(2, 4).flat(notDefined)
    }).toThrowError(ReferenceError, "notDefined is not defined")
  })

})