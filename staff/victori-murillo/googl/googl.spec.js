describe("goggl", function() {
  it("should always return a title", function(done) {

    googl("pepito", function(result) {

      result.forEach(function(element) {
        expect(typeof element.title).toBe("string")
      })
      done()
    })
  })

  it("should fail on none string query", function() {
    expect(function() {
      googl(undefined, function(){})
    }).toThrowError(TypeError, "undefined is not a string")

    expect(function() {
      googl([], function(){})
    }).toThrowError(TypeError, "Array is not a string")

    expect(function() {
      googl({}, function(){})
    }).toThrowError(TypeError, "[object Object] is not a string")

    expect(function() {
      googl(true, function(){})
    }).toThrowError(TypeError, "true is not a string")

    expect(function() {
      googl(5, function(){})
    }).toThrowError(TypeError, "5 is not a string")
  })


  it("should fail on none function as second parameter", function() {
    expect(function() {
      googl("pepito")
    }).toThrowError(TypeError, "undefined is not a function")

    expect(function() {
      googl("pepito", [])
    }).toThrowError(TypeError, "Array is not a function")

    expect(function() {
      googl("pepito", {})
    }).toThrowError(TypeError, "[object Object] is not a function")

    expect(function() {
      googl("pepito", 5)
    }).toThrowError(TypeError, "5 is not a function")

    expect(function() {
      googl("pepito", false)
    }).toThrowError(TypeError, "false is not a function")
  })





})