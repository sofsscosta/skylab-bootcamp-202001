describe("yahoo", function() {

  // it("should always return a title", function(done) {

  //   yahoo("pepito", function(result) {

  //     result.forEach(function(element) {
  //       expect(typeof element.title).toBe("string")
  //     })
  //     done()
  //   })
  // })

  it("should fail on none string query", function() {
    expect(function() {
      yahoo(undefined, function(){})
    }).toThrowError(TypeError, "undefined is not a string")

    expect(function() {
      yahoo([], function(){})
    }).toThrowError(TypeError, "Array is not a string")

    expect(function() {
      yahoo({}, function(){})
    }).toThrowError(TypeError, "[object Object] is not a string")

    expect(function() {
      yahoo(true, function(){})
    }).toThrowError(TypeError, "true is not a string")

    expect(function() {
      yahoo(5, function(){})
    }).toThrowError(TypeError, "5 is not a string")
  })


  it("should fail on none function as second parameter", function() {
    expect(function() {
      yahoo("pepito")
    }).toThrowError(TypeError, "undefined is not a function")

    expect(function() {
      yahoo("pepito", [])
    }).toThrowError(TypeError, "Array is not a function")

    expect(function() {
      yahoo("pepito", {})
    }).toThrowError(TypeError, "[object Object] is not a function")

    expect(function() {
      yahoo("pepito", 5)
    }).toThrowError(TypeError, "5 is not a function")

    expect(function() {
      yahoo("pepito", false)
    }).toThrowError(TypeError, "false is not a function")
  })





})