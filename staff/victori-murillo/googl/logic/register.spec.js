describe("register", function() {

  // it("should fail on register user already exists", function() {
  //   expect(function() {
  //     register({username: "vic"})
  //   }).toThrowError(TypeError, "User " + "vic" + " already exists")
  // })

  it("should fail on none object as first or second parameter", function() {
    expect(function() {
      register(undefined)
    }).toThrowError(TypeError, "undefined is not an object")

    expect(function() {
      register([])
    }).toThrowError(TypeError, "Array is not an object")

    expect(function() {
      register(true)
    }).toThrowError(TypeError, "true is not an object")

    expect(function() {
      register(5)
    }).toThrowError(TypeError, "5 is not an object")
  })


})