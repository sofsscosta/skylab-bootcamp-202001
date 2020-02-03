describe("Murray.prototype.concat", function() {

  it("should return a new murray", function() {


    expect(new Murray(1, 2).concat(new Murray(1))).toBeInstanceOf(Murray)
  })

  it("should concaten a murray and number/string/boolean/object", function() {
    var murray = new Murray(1, 2, 3)
    var newMurray = murray.concat('code')
    expect(newMurray[3]).toBe("code")
  })

  it("Should does not change the existing murrays", function() {
    var murray1 = new Murray(1, 2)
    var murray2 = new Murray(3, 4)

    murray1.concat(murray2)

    murray1.forEach(function(element, index) {
      expect(element).toBe(index + 1)
    })

    murray2.forEach(function(element, index) {
      expect(element).toBe(index + 3)
    })
  })

  it("should concat 2 or more murrays", function() {
    var murray1 = new Murray(1, 2)
    var murray2 = new Murray(3, 4)
    var murray3 = new Murray(5, 6)

    murray1.concat(murray2, murray3).forEach(function(element, index) {
      expect(element).toBe(index + 1)
    })

  })

  it("should return elements ordered in two arrays", function() {
    var murray1 = new Murray(1, 2, 3)
    var murray2 = new Murray(4, 5, 6)

    murray1.concat(murray2).forEach(function(element, index) {
      if (index < murray1.length) {
        expect(element).toBe(murray1[index])
      } else {
        expect(element).toBe(murray2[index - murray1.length])
      }
    })

  })


    

})

//   concat(array1, array2).forEach(function(element, index) {
//     if (index < array1.length) {
//       assert(element === array1[index], "should return the same element ordered in the two array");
//     } else {
//       assert(element === array2[index - array1.length], "should return the same element ordered in the two array");
//     }
//   });

// });